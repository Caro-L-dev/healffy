"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Wrapper } from "@/components/wrapper/Wrapper";
import { DecorativeImage } from "@/components/decorativeImg.tsx/DecorativeImg";

import { useUserStore } from "@/lib/store/use-user-store";

export default function LoginPage() {
  const userStore = useUserStore();
  const router = useRouter();

  return (
    <Wrapper className="relative flex flex-col items-center justify-center gap-4 py-4">
      <div>
        <DecorativeImage
          src={"/burger.png"}
          alt={"Burger"}
          width={50}
          height={50}
          top="2px"
          left="30px"
          rotation="-30deg"
        />
        <DecorativeImage
          src={"/dessert.png"}
          alt={"Dessert"}
          width={50}
          height={50}
          top="2px"
          right="30px"
          rotation="-15deg"
        />
        <DecorativeImage
          src={"/fries.png"}
          alt={"Fries"}
          width={50}
          height={50}
          top="65px"
          left="5px"
          rotation="-20deg"
        />
        <DecorativeImage
          src={"/nuggets.png"}
          alt={"Nuggets"}
          width={50}
          height={50}
          top="65px"
          right="15px"
          rotation="12deg"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Bienvenue chez Healffy !</h1>
        <p>Inscris-toi pour accéder à ton compte.</p>
      </div>
      <form
        className="flex items-center gap-2 mt-5"
        action={(formData) => {
          const userName = formData.get("userName");
          userStore.login(userName);
          router.push("/");
        }}
      >
        <Input name="userName" type="text" placeholder="Votre nom" />
        <Button type="submit">S&apos;inscrire</Button>
      </form>
    </Wrapper>
  );
}
