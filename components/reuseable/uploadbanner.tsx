"use client";

import { useState } from "react";
import { addDocument } from "@/lib/firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase/client";
import { Button } from "@/components/ui/button";

export function BannerUploader() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);

  const uploadSingleImage = async (file: File) => {
    const fileRef = ref(storage, `banners/${Date.now()}-${file.name}`);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  };

  const handleUpload = async () => {
    if (!files || files.length === 0) return;

    setLoading(true);

    const urls: string[] = [];

    // Upload one by one
    for (const file of Array.from(files)) {
      const url = await uploadSingleImage(file);
      urls.push(url);
    }

    // Save banner doc to Firestore using your addDocument()
    await addDocument("banners", {
      urls,
    });

    setFiles(null);
    setLoading(false);

    alert("Banners uploaded!");
  };

  return (
    <div className="p-4 border rounded-xl flex flex-col gap-4">
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => setFiles(e.target.files)}
      />

      <Button disabled={loading} onClick={handleUpload}>
        {loading ? "Uploading..." : "Upload Banners"}
      </Button>
    </div>
  );
}
