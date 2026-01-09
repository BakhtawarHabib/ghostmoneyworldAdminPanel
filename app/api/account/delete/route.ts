import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth/verify-token";
import { adminDb, adminAuth } from "@/lib/firebase/admin";
import { FirebaseError } from "firebase/app";
import { deleteFilesFromStorage } from "@/lib/firebase/firebase-delete";

/**
 * DELETE /api/account/delete
 * Allows authenticated users to delete their own account
 * Deletes:
 * - User from Firebase Auth
 * - User document from Firestore
 * - User's videos and associated storage files
 * - User's categories
 */
export async function DELETE() {
  const auth = await verifyToken();
  if (!auth.success) return auth.response;

  const { uid } = auth;

  try {
    // Get user document from Firestore to find the document ID
    const usersSnapshot = await adminDb
      .collection("users")
      .where("uid", "==", uid)
      .limit(1)
      .get();

    if (usersSnapshot.empty) {
      return NextResponse.json(
        { success: false, message: "User not found in Firestore" },
        { status: 404 },
      );
    }

    const userDoc = usersSnapshot.docs[0];
    const userDocId = userDoc.id;

    // Get all videos created by this user
    const videosSnapshot = await adminDb
      .collection("videos")
      .where("createdBy", "==", uid)
      .get();

    // Collect all file URLs to delete from storage
    const fileUrls: (string | undefined | null)[] = [];

    // Delete videos and collect their file URLs
    const videoDeletionPromises = videosSnapshot.docs.map(async (doc) => {
      const videoData = doc.data();
      if (videoData.thumbnail) fileUrls.push(videoData.thumbnail);
      if (videoData.video) fileUrls.push(videoData.video);
      return doc.ref.delete();
    });

    // Get all categories created by this user
    const categoriesSnapshot = await adminDb
      .collection("categories")
      .where("createdBy", "==", uid)
      .get();

    // Delete categories
    const categoryDeletionPromises = categoriesSnapshot.docs.map((doc) =>
      doc.ref.delete(),
    );

    // Execute all deletions in parallel
    await Promise.all([
      ...videoDeletionPromises,
      ...categoryDeletionPromises,
    ]);

    // Delete files from Firebase Storage
    if (fileUrls.length > 0) {
      await deleteFilesFromStorage(fileUrls);
    }

    // Delete user document from Firestore
    await adminDb.collection("users").doc(userDocId).delete();

    // Delete user from Firebase Auth
    try {
      await adminAuth.deleteUser(uid);
    } catch (authError) {
      console.error("Error deleting user from Auth:", authError);
      // Continue even if Auth deletion fails - user document is already deleted
    }

    return NextResponse.json(
      {
        success: true,
        message: "Account deleted successfully",
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error("Account deletion error:", error);
    
    if (error instanceof FirebaseError) {
      return NextResponse.json(
        { error: error.message, code: error.code },
        { status: 500 },
      );
    }
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "Unknown error occurred" },
      { status: 500 },
    );
  }
}

