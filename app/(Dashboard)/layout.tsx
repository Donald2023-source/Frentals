"use client"

import { Nunito } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";
import DashboardNav from "../Components/DashboardNav";
import Layout from "../Components/Layout";
import Footer from "../Components/Footer";

const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

// const nunitoMono = Nunito_Mono({
//   variable: "--font-nunito-mono",
//   subsets: ["latin"],
// });



export default function Dashboardlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <Layout>
      <div >
      <DashboardNav />
      {children}
      <Footer />
      <Toaster />
      </div>

    </Layout>
  );
}
