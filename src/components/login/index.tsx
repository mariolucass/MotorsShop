import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schemas";
import { Button, Alert } from "@mui/material";
import { useUserContext } from "../../context";
import { iLoginUseForm } from "../../interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Box, Title, Form } from "./style";

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
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Digitar email"
            {...register("email")}
          />
          {errors.email && (
            <Alert severity="error" id="alert">
              {errors.email!.message}
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

          <Link to={"/resetpassword"} id="forgot_password">
            Esqueci minha senha
          </Link>

          <Button variant="contained" type="submit" id="login">
            Entrar
          </Button>
        </Form>
        <span id="do_not_account">Ainda não possui conta?</span>
        <Link to={"/register"} id="register">
          Cadastrar
        </Link>
      </Box>
    </Container>
  );
};
