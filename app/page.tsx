"use client";

import { Wrapper } from "@/components/wrapper/Wrapper";

import { useUserStore } from "@/lib/store/use-user-store";

import LoginPage from "./login/page";

export default function Home() {
  const userName = useUserStore((s) => s.userName);

  if (!userName) {
    return <LoginPage />;
  }
  return (
    <main>
      <Wrapper>
        <h1 className="text-center text-lg font-bold">
          Bienvenue sur votre compte{" "}
          <span className="capitalize">{userName}</span> !
        </h1>
      </Wrapper>
    </main>
  );
}
