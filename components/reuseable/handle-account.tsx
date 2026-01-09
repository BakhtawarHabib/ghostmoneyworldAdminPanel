import { useLogout } from "@/lib/hooks/mutations/use-auth";
import { useAuthStore } from "@/lib/stores/auth-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Power, Loader2, Trash2 } from "lucide-react";
import { LoadingOverlay } from "./loading-overlay";
import { useRouter } from "next/navigation";

export function HandleAccount() {
  const { user } = useAuthStore();
  const router = useRouter();
  const logoutMutation = useLogout();

  if (!user) return null;

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
  };

  const handleDeleteAccount = () => {
    router.push("/account/delete");
  };

  return (
    <>
      {logoutMutation.isPending && <LoadingOverlay message="Signing out..." />}
      <DropdownMenu>
        <DropdownMenuTrigger disabled={logoutMutation.isPending}>
          <Avatar>
            <AvatarImage src={user?.photoURL || ""} />
            <AvatarFallback>
              {user?.displayName?.[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="me-4">
          <DropdownMenuLabel>Manage Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{user?.displayName}</DropdownMenuItem>
          <DropdownMenuItem>{user?.email}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            onClick={handleLogout}
            disabled={logoutMutation.isPending}
          >
            {logoutMutation.isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Power />
            )}
            Log out
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            onClick={handleDeleteAccount}
            disabled={logoutMutation.isPending}
            className="text-destructive focus:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
            Delete Account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
