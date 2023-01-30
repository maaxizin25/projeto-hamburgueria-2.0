import React from "react";
import { CartProvider } from "./CartContext";
import { Props } from "./types";
import { UserProvider } from "./UserContext";

export const Providers = ({ children }: Props) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};
