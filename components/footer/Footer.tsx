import Image from "next/image";
import Link from "next/link";

import { Wrapper } from "../common/wrapper/Wrapper";

export const Footer = () => {
  return (
    <footer className="border-t">
      <Wrapper className="flex items-center gap-2 justify-between">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image
            src="/healthdonals.png"
            alt="Healffy logo"
            width={32}
            height={32}
          />
          <p className="text-sm font-bold">Healffy</p>
        </Link>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Healffy. All rights reserved.
        </p>
      </Wrapper>
    </footer>
  );
};
