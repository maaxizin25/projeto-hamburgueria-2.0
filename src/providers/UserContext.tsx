import axios, { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../services/api";
import {
  dataLogin,
  dataRegister,
  iDefaultErrorResponse,
  iUserValue,
  ProductsList,
  Props,
} from "./types";

export const UserContext = createContext({} as iUserValue);

export const UserProvider = ({ children }: Props) => {
  const navigate: NavigateFunction = useNavigate();
  const [products, setProducts] = useState<ProductsList[]>([]);
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filterList, setFilterList] = useState<ProductsList[]>();

  useEffect(() => {
    async function infoUser() {
      const token = localStorage.getItem("@TOKEN");

      if (!token) {
        setLoading(false);
        return;
      }

      if (token) {
        try {
          setLoading(true);
          const myToken = JSON.parse(token);
          Api.defaults.headers.common.authorization = `Bearer ${myToken}`;
          const response = await Api.get("/products");
          setProducts(response.data);
          setUser(true);
        } catch (error) {
          console.log(error);
          localStorage.clear();
        } finally {
          setLoading(false);
        }
      }
    }
    infoUser();
  }, [navigate]);

  const filterProductList = !filterList ? products : filterList;

  function filterProducts(product: string) {
    setFilterList(
      products.filter((e) => e.name.toLowerCase().trim().includes(product))
    );
  }

  function logoutUser() {
    localStorage.clear();
    navigate("/login");
  }

  async function login(data: dataLogin) {
    try {
      const response = await Api.post("/login", data);
      toast.success("Login efetuado com sucesso!");
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.accessToken));
      navigate("/dashboard");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      if (currentError.response?.data) {
        toast.error("Usúario ou senha está incorreto");
      }
    }
  }

  return (
    <UserContext.Provider
      value={{
        login,
        filterProductList,
        filterProducts,
        loading,
        user,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
