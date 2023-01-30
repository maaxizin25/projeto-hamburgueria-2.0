import { Input } from "../../../components/input";
import { DivForm } from "../../../styles/divForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaRegister } from "./formSchema";
import { Button } from "../../../styles/button";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";
import { dataRegister, iDefaultErrorResponse } from "../../../providers/types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { Api } from "../../../services/api";

interface FormValueRegister {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueRegister>({ resolver: yupResolver(formSchemaRegister) });

  const navigate: NavigateFunction = useNavigate();

  async function registerUser(data: dataRegister) {
    try {
      const response = await Api.post("/users", data);
      toast.success("Usúario criado com sucesso!");
      navigate("/login");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.log(currentError);
      if (currentError.response?.data) {
        toast.error("Ocorreu um erro");
      }
    }
  }

  return (
    <DivForm>
      <form onSubmit={handleSubmit(registerUser)}>
        <span className="spanRegister">
          <h1>Cadastro</h1>
          <Link className="goToLogin" to={"/"}>
            Retornar para Login
          </Link>
        </span>
        <Input
          register={register("name")}
          type={"text"}
          id={"name"}
          label={"Nome"}
          placeholder={"Nome"}
        />
        {errors.name && <p className="error-input">{errors.name.message}</p>}
        <Input
          register={register("email")}
          type={"text"}
          id={"email"}
          label={"Email"}
          placeholder={"E-mail"}
        />
        {errors.email && <p className="error-input">{errors.email.message}</p>}
        <Input
          register={register("password")}
          type={"password"}
          id={"password"}
          label={"Senha"}
          placeholder={"Senha"}
        />
        {errors.password && (
          <p className="error-input">{errors.password.message}</p>
        )}
        <Input
          type={"password"}
          id={"confirm-password"}
          label={"Confirmar senha"}
          placeholder={"Confirmar Senha"}
          register={register("confirm_password")}
        />
        {errors.confirm_password && (
          <p className="error-input">{errors.confirm_password.message}</p>
        )}

        <Button className="buttonRegister" color={"--color-primary"}>
          Cadastrar
        </Button>
      </form>
    </DivForm>
  );
};
