"use client";

import { type ReactNode } from "react";
import { redirect, usePathname } from "next/navigation";

const LOGIN_PATHNAME = "/login";

// hacky usage on SSR
const ValidateAuthBoundary = ({
  authStatus,
  children,
}: {
  authStatus: "EXPIRED" | "AUTHENTICATED" | null;
  children: ReactNode;
}) => {
  const pathname = usePathname();
  if (typeof window === "undefined") {
    if (
      (!authStatus || authStatus === "EXPIRED") &&
      pathname !== LOGIN_PATHNAME
    ) {
      redirect(LOGIN_PATHNAME);
    } else if (authStatus === "AUTHENTICATED" && pathname === LOGIN_PATHNAME) {
      redirect("/");
    }
  }
  return <>{children}</>;
};

export default ValidateAuthBoundary;
