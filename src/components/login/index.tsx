import { Container, Box, Title, Form } from "./style"
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';

export const Login = () => {
    return (
        <Container>
            <Box>
                <Title>Login</Title>
                <Form>
                    <label htmlFor="name">Usuário</label>
                    <input type="text" id="name" placeholder="Digitar usuário"/>
                    <label htmlFor="password">Senha</label>
                    <input type="text" id="password" placeholder="Digitar senha"/>
                    <Link to={"/"} id="forgot_password"> Esqueci minha senha </Link>
                    <Button variant="contained" type="submit" id="login"> Entrar </Button>
                </Form>
                <span id="do_not_account">Ainda não possui conta?</span>
                <Link to={"/register"} id="register"> Cadastrar </Link>
            </Box>
        </Container>
    )
}