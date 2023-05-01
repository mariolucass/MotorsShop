import { useForm } from "react-hook-form";
import { ModalGeneral } from "..";
import { Input } from "../../inputs";
import { Container, Form, DivisionTypes, Buttons } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import { useUserContext } from "../../../context/UserContext";
import Button from "@mui/material/Button";
import { useModalContext } from "../../../context";
import { deleteUser, patchUser } from "../../../services/apiUser";

interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  birthdate?: Date;
  description?: string;
  role?: string;
  /*     zip_code?: string
    state?: string
    street?: string
    city?: string
    number?: string
    complement?: string */
}

export const ModalUpdateDeleteUser = () => {
  const { userData } = useUserContext();
  const { register, handleSubmit, setValue } = useForm();
  const { handleClose, handleOpen } = useModalContext();

  const onSubmit = async (data: IUserUpdate) => {
    let response = await patchUser(data, userData!.id);
    handleClose();
  };

  const deleteUserId = async () => {
    await deleteUser(userData!.id);
    document.location.reload();
  };

  useEffect(() => {
    setValue("name", userData ? userData.name : "");
    setValue("email", userData ? userData.email : "");
    setValue("phone", userData ? userData.phone : "");
    setValue("cpf", userData ? userData.cpf : "");
    setValue("birthdate", userData ? userData.birthdate : "");
    setValue("description", userData ? userData.description : "");
    setValue("role", userData ? userData.role : "");
  }, [handleOpen]);

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
          <Input
            label="Email"
            name="email"
            width="100%"
            placeholder="Email"
            register={register}
          />
          {/* <Input label="Senha" name="password" width="100%" placeholder="Senha" register={register}/> */}
          <Input
            label="CPF"
            name="cpf"
            width="100%"
            placeholder="000.000.000-00"
            register={register}
          />
          <Input
            label="Celular"
            name="phone"
            width="100%"
            placeholder="(00) 00000-0000"
            register={register}
          />
          <Input
            label="Data de Nascimento"
            name="birthdate"
            width="100%"
            placeholder="DD/MM/AAAA"
            register={register}
          />
          <textarea placeholder="Descrição..." {...register("description")}>
            dsadasdas
          </textarea>
          <span>Tipo de conta</span>
          <DivisionTypes>
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
                deleteUserId();
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
