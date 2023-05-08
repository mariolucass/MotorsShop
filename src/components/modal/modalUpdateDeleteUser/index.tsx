import { useEffect } from "react";
import { Input } from "../../inputs";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserContext, useModalContext } from "../../../context";
import { updateUserSchema } from "../../../schemas/updateUserSchema";
import { Alert, Backdrop, Fade, Modal, Button } from "@mui/material";
import { IUpdateUser, IUpdateUserUseForm } from "../../../interfaces";
import { Container, Form, DivisionTypes, Buttons, Box } from "./style";
import { handleCpf, handlePhone, handleBirthdate } from "../../../utils";

export const ModalUpdateDeleteUser = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUpdateUserUseForm>({ resolver: zodResolver(updateUserSchema) });

  const { userData, destroyUser, updateUser } = useUserContext();
  const { handleCloseUpdateUser, openUpdateUser } = useModalContext();

  const onSubmit = async (data: IUpdateUser) => {
    try {
      updateUser({ ...data, role: data.role || "BUYER" }, userData!.id);
      handleCloseUpdateUser();
    } catch (error) {
      toast.error("Erro ao atualizar os dados");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openUpdateUser}
      onClose={handleCloseUpdateUser}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openUpdateUser}>
        <Box>
          <Container>
            <div id="title">
              <span>Editar perfil</span>
              <AiOutlineClose
                onClick={() => {
                  handleCloseUpdateUser();
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
                onKeyUp={handleCpf}
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
                onKeyUp={handlePhone}
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
                onKeyUp={handleBirthdate}
                register={register}
              />
              {errors.birthdate && (
                <Alert severity="error" id="alert">
                  {errors.birthdate!.message}
                </Alert>
              )}
              <textarea
                placeholder="Descrição..."
                {...register("description")}
              ></textarea>
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
                    handleCloseUpdateUser();
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
        </Box>
      </Fade>
    </Modal>
  );
};
