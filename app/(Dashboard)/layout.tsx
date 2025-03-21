
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";
import DashboardNav from "../Components/DashboardNav";

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


export default function Dashboardlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable}  antialiased`}>
            <DashboardNav />
          {children}
        <Toaster />
        
      </body>
    </html>
  );
}
