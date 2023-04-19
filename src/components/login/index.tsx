import { Container, Box, Title, Form, Button, Register } from "../../pages/login/style"
import { Link } from "react-router-dom"

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
                    <Link to={"/"}>
                        <span id="forgot_password">Esqueci minha senha</span>
                    </Link>
                    <Button type="submit">Entrar</Button>
                </Form>
                <span>Ainda não possui conta?</span>
                <Link to={"/register"}>
                    <Register>Cadastrar</Register>
                </Link>
            </Box>
        </Container>
    )
}