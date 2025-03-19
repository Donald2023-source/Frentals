import { ReactNode } from "react";
import { Nunito } from "next/font/google";

const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
        {children}  
    </>
  );
}
