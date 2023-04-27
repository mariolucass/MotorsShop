import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { apiServerSide } from "../../services";
import { Container, Box, Form } from "./styles";
import Logo from "../../assets/logoColored.svg";
import { IResetPassword } from "../../interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { Footer, Header, Input } from "../../components";
import { resetPasswordSchema } from "../../schemas/resetSchema";
import { Paper } from "@mui/material";

export const PasswordReset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPassword>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const handleReset = async (data: IResetPassword) => {
    console.log(data);

    try {
      const response = await apiServerSide.get("/");
      console.log(response);

      toast.success("Email enviado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("A conta não foi encontrada, tente novamente.");
    }
  };

  return (
    <>
      <Header />

      <Container>
        <Box>
          <Paper
            elevation={0}
            sx={{ padding: 2, display: "flex", justifyContent: "center" }}
          >
            <img src={Logo} alt="Logo" />
          </Paper>

          <span>
            Digite o endereço de e-mail associado à sua conta e enviaremos um
            link para redefinir sua senha
          </span>

          <Form onSubmit={handleSubmit(handleReset)}>
            <Input
              placeholder={"Digite seu email aqui"}
              label={"Email"}
              name={"email"}
              register={register}
              error={errors.email}
              width={"100"}
            />
            <Button className="buttonBrand" type="submit" sx={{ width: "95%" }}>
              Enviar email
            </Button>

            <span>
              Ainda não possui conta? <Link to={"/register"}>Cadastrar</Link>
            </span>
          </Form>
        </Box>
      </Container>

      <Footer />
    </>
  );
};
