"use client";

import { Wrapper } from "@/components/common/wrapper/Wrapper";
import { StrongText } from "@/components/common/title/StrongText";

import { useUserStore } from "@/lib/store/use-user-store";

import LoginPage from "./login/page";
import AdminPage from "./admin/page";

export default function Home() {
  const userName = useUserStore((s) => s.userName);

  if (!userName) {
    return <LoginPage />;
  }
  if (userName === "admin") {
    return <AdminPage />;
  }
  return (
    <main>
      <Wrapper className="text-center">
        <StrongText>
          {" "}
          Bienvenue sur votre compte{" "}
          <span className="capitalize">{userName}</span> !
        </StrongText>
      </Wrapper>
    </main>
  );
}
