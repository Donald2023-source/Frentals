import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";


const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

// const nunitoMono = Nunito_Mono({
//   variable: "--font-nunito-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Frentals",
  description: "Your farming success starts here ",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable}  antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
