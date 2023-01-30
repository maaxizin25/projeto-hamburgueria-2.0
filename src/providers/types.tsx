import { ReactNode } from "react";

export interface dataLogin {
  email: string;
  password: string;
}
export interface dataRegister {
  email: string;
  password: string;
  name: string;
}
export interface iUserValue {
  login: (data: dataLogin) => void;
  filterProductList: ProductsList[] | null;
  loading: boolean;
  user: boolean;
  filterProducts: (product: string) => void;
  logoutUser: () => void;
}

export interface iCartValue {
  cart: ProductsList[] | null;
  addCart: (id: number) => void;
  valueOfCart: number;
  viewCart: boolean;
  setViewCart: (value: boolean) => void;
  valueTotalCart: number;
  removeCart: (product: ProductsList) => void;
  removeAll: () => void;
  setQtdCart: (product: ProductsList, sinal: string) => void;
}

export interface Props {
  children: ReactNode;
}

export interface iDefaultErrorResponse {
  error: string;
}
export interface ProductsList {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
  qtd: number;
}
