import Link from "next/link";

import { Wrapper } from "@/components/common/wrapper/Wrapper";
import { StrongText } from "@/components/common/title/StrongText";

import { Button } from "@/components/ui/button";

export default function AdminPage() {
  return (
    <Wrapper className="flex flex-col justify-center items-center gap-y-4">
      <StrongText>Vous voici sur votre page Admin</StrongText>
      <Button>
        <Link href={"/items/new"}>Ajouter un nouveau produit</Link>
      </Button>
    </Wrapper>
  );
}
