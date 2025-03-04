import { Nunito_Sans } from "next/font/google";
import { ReactNode } from "react";
import Hero2 from "../Components/Hero2";
import { Nunito } from "next/font/google";
import Footer from "../Components/Footer";

const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased flex flex-col gap-10`}
      >
        <Hero2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
