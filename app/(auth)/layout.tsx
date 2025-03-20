import { Nunito_Sans } from "next/font/google";
import { ReactNode } from "react";

import { Nunito } from "next/font/google";
import AuthLayout from "../Components/AuthLayout";

const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <AuthLayout>{children}</AuthLayout>
    </>
  );
}
