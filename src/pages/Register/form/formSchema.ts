import * as yup from "yup";

export const formSchemaRegister = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email Obrigatório").email("Email inválido!"),
  password: yup
    .string()
    .required("Senha Obrigatória")
    .min(8, "Insira pelo menos 8 catacteres")
    .matches(/(?=.*?[a-z])/, "Insira pelo menos uma letra")
    .matches(/(?=.*?[0-9])/, "Insira ao menos um número"),
  confirm_password: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password"), null], "Senhas não conferem"),
});
