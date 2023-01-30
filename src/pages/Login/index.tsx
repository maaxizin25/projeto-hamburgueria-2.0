import { StylePage } from "../../components/stylePage";
import { FormLogin } from "./form";
import { Container } from "../../styles/container";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LoginPage = () => {
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <Container>
      <FormLogin />
      <StylePage />
    </Container>
  );
};
