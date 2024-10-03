"use client";

import Image from "next/image";
import Link from "next/link";

import { ShoppingBasket } from "lucide-react";

import { Wrapper } from "../common/wrapper/Wrapper";
import { UserNameHeader } from "./UserNameHeader";

import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="border-b shadow-sm">
      <Wrapper className="flex items-center">
        <Link href="/" className="inline-flex flex-1 items-center gap-2">
          <Image
            src="/healthdonals.png"
            alt="Healffy logo"
            width={40}
            height={40}
          />
          <h1 className="text-sm font-bold tracking-wide">Healffy</h1>
        </Link>
        <div className="flex-1">
          <UserNameHeader />
        </div>

        <Button
          size="sm"
          variant="outline"
          className="inline-flex gap-2 items-center flex-none"
        >
          0
          <ShoppingBasket size={12} />
        </Button>
      </Wrapper>
    </header>
  );
};
