import { useForm } from "react-hook-form";
import { Button, Alert } from "@mui/material";
import { registerSchema } from "../../schemas";
import { useUserContext } from "../../context";
import { iRegisterUseForm } from "../../interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Container, Form, Title, SubTitle, Division } from "./style";
import {
  handleBirthdate,
  handleCep,
  handleCpf,
  handlePhone,
} from "../../utils";

export const Register = () => {
  const { registerUser } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUseForm>({ resolver: zodResolver(registerSchema) });

  return (
    <Container>
      <Box>
        <Title id="titulo">Cadastro</Title>
        <Form onSubmit={handleSubmit(registerUser)}>
          <SubTitle>Foto de Perfil</SubTitle>
          <label htmlFor="image">Avatar</label>
          <input
            type="file"
            accept="image/*"
            id="image"
            {...register("image")}
          />
          {errors.image && (
            <Alert severity="error" id="alert">
              {errors.image!.message}
            </Alert>
          )}
          <SubTitle>Informações Pessoais</SubTitle>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Ex: Samuel Leão"
            {...register("name")}
          />
          {errors.name && (
            <Alert severity="error" id="alert">
              {errors.name!.message}
            </Alert>
          )}

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Ex: samuel@kenzie.com.br"
            {...register("email")}
          />
          {errors.email && (
            <Alert severity="error" id="alert">
              {errors.email!.message}
            </Alert>
          )}

          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            placeholder="000.000.000-00"
            onKeyUp={handleCpf}
            {...register("cpf")}
          />
          {errors.cpf && (
            <Alert severity="error" id="alert">
              {errors.cpf!.message}
            </Alert>
          )}

          <label htmlFor="phone">Celular</label>
          <input
            type="text"
            id="phone"
            placeholder="(00) 00000-0000"
            onKeyUp={handlePhone}
            {...register("phone")}
          />
          {errors.phone && (
            <Alert severity="error" id="alert">
              {errors.phone!.message}
            </Alert>
          )}

          <label htmlFor="birthdate">Data de nascimento</label>
          <input
            type="text"
            id="birthdate"
            placeholder="DD/MM/AAAA"
            onKeyUp={handleBirthdate}
            {...register("birthdate")}
          />
          {errors.birthdate && (
            <Alert severity="error" id="alert">
              {errors.birthdate!.message}
            </Alert>
          )}

          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            placeholder="Digitar descrição"
            {...register("description")}
          ></textarea>

          <SubTitle>Informações de endereço</SubTitle>
          <label htmlFor="zip_code">CEP</label>
          <input
            type="text"
            id="zip_code"
            placeholder="00000-000"
            onKeyUp={handleCep}
            {...register("address.zip_code")}
          />
          {errors.address && errors.address.zip_code && (
            <Alert severity="error" id="alert">
              {errors.address.zip_code!.message}
            </Alert>
          )}

          <Division>
            <div>
              <label htmlFor="state">Estado</label>
              <input
                type="text"
                id="state"
                placeholder="Digitar Estado"
                {...register("address.state")}
              />
            </div>

            <div>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                placeholder="Digitar Cidade"
                {...register("address.city")}
              />
            </div>
          </Division>
          {errors.address && errors.address.state && (
            <Alert severity="error" id="alert">
              {errors.address.state!.message}
            </Alert>
          )}
          {errors.address && errors.address.city && (
            <Alert severity="error" id="alert">
              {errors.address.city!.message}
            </Alert>
          )}

          <label htmlFor="street">Rua</label>
          <input
            type="text"
            id="street"
            placeholder="Digitar Rua"
            {...register("address.street")}
          />
          {errors.address && errors.address.street && (
            <Alert severity="error" id="alert">
              {errors.address.street!.message}
            </Alert>
          )}

          <Division>
            <div>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                id="number"
                placeholder="Digitar número"
                {...register("address.number")}
              />
            </div>

            <div>
              <label htmlFor="complement">Complemento</label>
              <input
                type="text"
                id="complement"
                placeholder="Ex: apart 307"
                {...register("address.complement")}
              />
            </div>
          </Division>
          {errors.address && errors.address.number && (
            <Alert severity="error" id="alert">
              {errors.address.number!.message}
            </Alert>
          )}

          <SubTitle>Tipo de conta</SubTitle>
          <Division className="division_types">
            <label className="radio">
              <input
                type="radio"
                value={"BUYER"}
                {...register("role")}
                checked
              />
              <span>Comprador</span>
            </label>
            <label className="radio">
              <input type="radio" value={"SELLER"} {...register("role")} />
              <span>Anunciante</span>
            </label>
          </Division>

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

          <label htmlFor="confirm_password">Confirmar senha</label>
          <input
            type="password"
            id="confirm_password"
            placeholder="Digitar senha"
            {...register("confirm_password")}
          />
          {errors.confirm_password && (
            <Alert severity="error" id="alert">
              {errors.confirm_password!.message}
            </Alert>
          )}

          <Button variant="contained" type="submit" id="finished_register">
            Finalizar Cadastro
          </Button>
        </Form>
      </Box>
    </Container>
  );
};
