"use client";

import { ReactNode } from "react";

type StrongTextProps = {
  children: ReactNode;
  className?: string;
};

export const StrongText = ({ children }: StrongTextProps) => {
  return <h1 className="font-bold text-lg">{children}</h1>;
};
