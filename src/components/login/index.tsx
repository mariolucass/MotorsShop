import { Container, Box, Title, Form } from "./style";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { loginSchema } from "../../schemas/loginSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Alert from "@mui/material/Alert";
import { z } from "zod";
import { useUserContext } from "../../context";

export interface iLogin {
  name: string;
  password: string;
}

type iLoginUseForm = z.infer<typeof loginSchema>;

export const Login = () => {
  const { loginUser } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginUseForm>({ resolver: zodResolver(loginSchema) });

  return (
    <Container>
      <Box>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit(loginUser)}>
          <label htmlFor="name">Usuário</label>
          <input
            type="text"
            id="name"
            placeholder="Digitar usuário"
            {...register("name")}
          />
          {errors.name && (
            <Alert severity="error" id="alert">
              {errors.name!.message}
            </Alert>
          )}

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digitar senha"
            {...register("password")}
          />
          {errors.password && (
            <Alert severity="error" id="alert">
              {errors.password!.message}
            </Alert>
          )}

          <Link to={"/"} id="forgot_password">
            {" "}
            Esqueci minha senha{" "}
          </Link>

          <Button variant="contained" type="submit" id="login">
            {" "}
            Entrar{" "}
          </Button>
        </Form>
        <span id="do_not_account">Ainda não possui conta?</span>
        <Link to={"/register"} id="register">
          {" "}
          Cadastrar{" "}
        </Link>
      </Box>
    </Container>
  );
};
