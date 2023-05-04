import { useForm } from "react-hook-form";
import { ModalGeneral } from "..";
import { Input } from "../../inputs";
import { Container, Form, DivisionTypes, Buttons } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import { useUserContext, useModalContext } from "../../../context";
import Button from "@mui/material/Button";
import { IUpdateUser, IUpdateUserUseForm } from "../../../interfaces";
import { Alert } from "@mui/material";
import { updateUserSchema } from "../../../schemas/updateUserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

export const ModalUpdateDeleteUser = () => {
  const { userData, destroyUser, updateUser } = useUserContext();
  const { register, handleSubmit, setValue, formState: {errors} } = useForm<IUpdateUserUseForm>( {resolver: zodResolver(updateUserSchema)});
  const { handleClose } = useModalContext();

  const onSubmit = async (data: IUpdateUser) => {
    /* console.log(data.role) */
    try {
      updateUser({...data, role: data.role || "BUYER"}, userData!.id)
      handleClose();
    } catch (error) {
      toast.error("Erro ao atualizar os dados")
    }
  };

  useEffect(() => {
    if (userData) {
      setValue("name", userData ? userData.name : "");
      setValue("email", userData ? userData.email : "");
      setValue("phone", userData ? userData.phone : "");
      setValue("cpf", userData ? userData.cpf : "");
      setValue("birthdate", userData ? userData.birthdate : "");
      setValue("description", userData ? userData.description : "");
      setValue("role", userData!.role);
    }
  }, [userData]);

  return (
    <ModalGeneral>
      <Container>
        <div id="title">
          <span>Editar perfil</span>
          <AiOutlineClose
            onClick={() => {
              handleClose();
            }}
          />
        </div>
        <h3 id="subtitle">Informações pessoais</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome"
            name="name"
            width="100%"
            placeholder="Nome completo"
            register={register}
          />
          {errors.name && (
            <Alert severity="error" id="alert">
              {errors.name!.message}
            </Alert>
          )}
          <Input
            label="Email"
            name="email"
            width="100%"
            placeholder="Email"
            register={register}
          />
          {errors.email && (
            <Alert severity="error" id="alert">
              {errors.email!.message}
            </Alert>
          )}
          <Input
            label="CPF"
            name="cpf"
            width="100%"
            placeholder="000.000.000-00"
            register={register}
          />
          {errors.cpf && (
            <Alert severity="error" id="alert">
              {errors.cpf!.message}
            </Alert>
          )}
          <Input
            label="Celular"
            name="phone"
            width="100%"
            placeholder="(00) 00000-0000"
            register={register}
          />
          {errors.phone && (
            <Alert severity="error" id="alert">
              {errors.phone!.message}
            </Alert>
          )}
          <Input
            label="Data de Nascimento"
            name="birthdate"
            width="100%"
            placeholder="DD/MM/AAAA"
            register={register}
          />
          {errors.birthdate && (
            <Alert severity="error" id="alert">
              {errors.birthdate!.message}
            </Alert>
          )}
          <textarea placeholder="Descrição..." {...register("description")}>
          </textarea>
          <span>Tipo de conta</span>
          <DivisionTypes>
            <label className="radio">
              <input
                type="radio"
                value={"BUYER"}
                {...register("role")}
                defaultChecked={userData?.role === "BUYER"}
              />
              <span>Comprador</span>
            </label>
            <label className="radio">
              <input 
              type="radio" 
              value={"SELLER"} 
              {...register("role")} 
              defaultChecked={userData?.role === "SELLER"}
              />
              <span>Anunciante</span>
            </label>
          </DivisionTypes>
          <Buttons>
            <Button
              variant="contained"
              id="cancel"
              onClick={() => {
                handleClose();
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              id="delete"
              onClick={() => {
                if (userData) {
                  destroyUser(userData.id);
                }
              }}
            >
              Excluir
            </Button>
            <Button variant="contained" id="update" type="submit">
              Salvar Alterações
            </Button>
          </Buttons>
        </Form>
      </Container>
    </ModalGeneral>
  );
};
