"use client";

import { Nunito } from "next/font/google";
import "../globals.css";
import { toast, Toaster } from "sonner";
import DashboardNav from "../Components/DashboardNav";
import Layout from "../Components/Layout";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";

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
  const [isOnline, setOnline] = useState<boolean>(true);

  const updateNetworkStatus = () => {
    setOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("load", updateNetworkStatus);
    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);

    return () => {
      window.removeEventListener("load", updateNetworkStatus);
      window.removeEventListener("online", updateNetworkStatus);
      window.removeEventListener("offline", updateNetworkStatus);
    };
  }, [navigator.onLine]);

  if (isOnline) {
    console.log("You're Online");
  } else {
    toast.error("Check Connection");
    console.log("You're offline")
  }

  return (
    <Layout>
      <div>
        <DashboardNav />
        {children}
        <Footer />
        <Toaster />
      </div>
    </Layout>
  );
}
