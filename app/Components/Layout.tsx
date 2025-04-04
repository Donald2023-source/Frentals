"use client";
import { persistor, store } from "@/redux/store";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./Loader";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </PersistGate>
    </Provider>
  );
};
export default Layout;
