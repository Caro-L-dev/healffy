"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

import { Wrapper } from "../wrapper/Wrapper";

import { ShoppingBasket } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b shadow-sm">
      <Wrapper className="flex items-center justify-between gap-2">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image
            src="/healthdonals.png"
            alt="Healffy logo"
            width={40}
            height={40}
          />
          <h1 className="text-sm font-bold tracking-wide">Healffy</h1>
        </Link>
        <Button
          size="sm"
          variant="outline"
          className="inline-flex gap-2 items-center"
        >
          0
          <ShoppingBasket size={12} />
        </Button>
      </Wrapper>
    </header>
  );
};
