import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const Authlayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthtenticated = await isAuthenticated();

  if (isUserAuthtenticated) {
    redirect("/");
  }

  return <div className="auth-layout">{children}</div>;
};

export default Authlayout;
