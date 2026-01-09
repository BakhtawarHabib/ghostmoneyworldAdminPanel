"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Loader2 } from "lucide-react";
import { useDeleteAccount } from "@/lib/hooks/mutations/use-auth";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/stores/auth-store";
import { useEffect } from "react";
import { LoadingOverlay } from "@/components/reuseable/loading-overlay";

export default function DeleteAccountPage() {
  const router = useRouter();
  const { user, initialized } = useAuthStore();
  const deleteAccountMutation = useDeleteAccount();

  useEffect(() => {
    // Redirect to sign-in if not authenticated
    if (initialized && !user) {
      router.push("/auth/sign-in");
    }
  }, [user, initialized, router]);

  // Show loading while checking auth
  if (!initialized) {
    return (
      <div className="flex min-h-svh w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Don't render if not authenticated (will redirect)
  if (!user) {
    return null;
  }

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you absolutely sure you want to delete your account? This action cannot be undone.")) {
      await deleteAccountMutation.mutateAsync();
    }
  };

  return (
    <>
      {deleteAccountMutation.isPending && (
        <LoadingOverlay message="Deleting your account..." />
      )}
      <div className="flex min-h-svh w-full items-start justify-center p-6 md:p-10">
        <div className="w-full max-w-2xl">
          <Card className="border-destructive">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-destructive/10 p-2">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Delete Account</CardTitle>
                  <CardDescription className="mt-1">
                    Permanently delete your account and all associated data
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg bg-destructive/10 p-4 border border-destructive/20">
                <h3 className="font-semibold text-destructive mb-2">
                  Warning: This action cannot be undone
                </h3>
                <p className="text-sm text-muted-foreground">
                  Deleting your account will permanently remove:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-2 ml-4">
                  <li>Your user account and profile information</li>
                  <li>All videos you have created</li>
                  <li>All categories you have created</li>
                  <li>All associated files and media</li>
                  <li>Your authentication credentials</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Account Information</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium">Email:</span> {user.email}
                    </p>
                    {user.displayName && (
                      <p>
                        <span className="font-medium">Name:</span> {user.displayName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-4">
                    If you're sure you want to proceed, click the button below. You will be asked to confirm one more time before the deletion is processed.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => router.back()}
                      disabled={deleteAccountMutation.isPending}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={handleDeleteAccount}
                      disabled={deleteAccountMutation.isPending}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      {deleteAccountMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Deleting Account...
                        </>
                      ) : (
                        "Delete My Account"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

