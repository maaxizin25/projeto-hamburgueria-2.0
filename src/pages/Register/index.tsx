import React from "react";
import { StylePage } from "../../components/stylePage";
import { Container } from "../../styles/container";
import { FormRegister } from "./form";

export const Register = () => {
  return (
    <Container>
      <FormRegister />
      <StylePage />
    </Container>
  );
};
