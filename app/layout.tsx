import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ValidateAuthBoundary from "./ValidateAuthBoundary";
import { validateAuth } from "./validateAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const result = await validateAuth();
  console.log("result in server", result);
  return (
    <html lang="en">
      <body className={inter.className}>
        <ValidateAuthBoundary authStatus={result?.status || null}>
          {children}
        </ValidateAuthBoundary>
      </body>
    </html>
  );
}
