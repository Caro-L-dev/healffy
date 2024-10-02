import { User } from "lucide-react";

import { useUserStore } from "@/lib/store/use-user-store";

export const UserNameHeader = () => {
  const userName = useUserStore((s) => s.userName);
  const logout = useUserStore((s) => s.logout);
  if (!userName) {
    return null;
  }
  return (
    <button onClick={() => logout()} className="flex items-center gap-2">
      <User size={12} />
      <p className="text-sm capitalize">{userName}</p>
    </button>
  );
};
