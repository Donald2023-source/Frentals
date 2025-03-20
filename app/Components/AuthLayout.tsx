'use client'
import { persistor, store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate persistor={persistor}>{children}</PersistGate>
        </Provider>
      </body>
    </html>
  );
};
export default AuthLayout;
