import { Paper } from "@mui/material";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { localApi } from "../../services";
import { useParams } from "react-router-dom";
import { Container, Box, Form } from "./styles";
import Logo from "../../assets/logoColored.svg";
import { IResetPassword } from "../../interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { Footer, Header, Input } from "../../components";
import { resetPasswordFieldsSchema } from "../../schemas/resetSchema";

export const PasswordReset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPassword>({
    resolver: zodResolver(resetPasswordFieldsSchema),
  });

  const { userId, token } = useParams();
  console.log(token);

  const handleReset = async (data: IResetPassword) => {
    try {
      const dataUpdated = {
        password: data.password,
      };

      await localApi.post(`/resetpassword/${userId}/${token}`, dataUpdated);

      toast.success("Senha atualizada com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error(
        "Houve um problema ao atualizar sua senha, por favor tente novamente mais tarde."
      );
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
              placeholder={"Digite sua senha aqui"}
              label={"Senha"}
              name={"password"}
              register={register}
              error={errors.password}
              width={"100"}
            />

            <Input
              placeholder={"Confirme sua senha aqui"}
              label={"Confirmar Senha"}
              name={"confirmPassword"}
              register={register}
              error={errors.confirmPassword}
              width={"100"}
            />

            <Button className="buttonBrand" type="submit" sx={{ width: "95%" }}>
              Redefinir senha
            </Button>
          </Form>
        </Box>
      </Container>

      <Footer />
    </>
  );
};
