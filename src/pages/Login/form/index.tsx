import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../../components/input";
import { DivForm } from "../../../styles/divForm";
import { formSchemaLogin } from "./formSchema";
import { Button } from "../../../styles/button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import React from "react";

interface FormValue {
  //Interface do UseForm
  email: string;
  password: string;
}

export const FormLogin = () => {
  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    //Typando o useForm
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <DivForm>
      <form onSubmit={handleSubmit(login)}>
        <h1>Login</h1>
        <Input
          id={"email"}
          placeholder={"Digite seu E-mail"}
          label={"Email"}
          register={register("email")}
          type={"text"}
        />
        {errors.email && <p className="error-input">{errors.email.message}</p>}
        <Input
          id={"senha"}
          type={"password"}
          placeholder={"Digite sua Senha"}
          label={"Senha"}
          register={register("password")}
        />
        {errors.password && (
          <p className="error-input">{errors.password.message}</p>
        )}
        <Button type="submit">Logar</Button>
        <p className="description-text">
          Crie sua conta para saborear muitas delicias e matar sua fome!
        </p>
        <Link className="goToRegister" to={"/register"}>
          Cadastrar
        </Link>
      </form>
    </DivForm>
  );
};
