"use client";

import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

export const Wrapper = ({ children, className }: WrapperProps) => {
  return <div className={`px-4 py-2 ${className}`}>{children}</div>;
};
