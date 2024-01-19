"use server";
import { cookies } from "next/headers";

export const login = async (email: string, password: string) => {
  if (email !== "hello" || password !== "world") {
    return false;
  }

  const expire = Date.now() + 1000 * 10;
  cookies().set("sessionid", JSON.stringify({ uuid: "sample", expire }), {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  return true;
};
