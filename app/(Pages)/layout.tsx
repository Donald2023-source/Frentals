import { Nunito_Sans } from "next/font/google";
import { ReactNode } from "react";
import Hero2 from "../Components/Hero2";
import { Nunito } from "next/font/google";
import Footer from "../Components/Footer";
import Testimonial from "../Components/Testimonial";
import ButtomSection from "../Components/ButtomSection";

const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Hero2 />
      {children}
      <ButtomSection />
    </>
  );
}

