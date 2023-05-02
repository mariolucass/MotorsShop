import { useForm } from "react-hook-form";
import { Input } from "../../inputs";
import { Container, Form, Buttons, Box } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import { useUserContext, useModalContext } from "../../../context";
import Button from "@mui/material/Button";
import { Backdrop, Fade, Modal } from "@mui/material";
import { patchUser } from "../../../services";
import Alert from "@mui/material/Alert";

interface IAddressUpdate {
  /*     name?: string
    email?: string
    password?: string
    phone?: string
    birthdate?: Date
    description?: string 
    role?: string  */
  zip_code?: string;
  state?: string;
  street?: string;
  city?: string;
  number?: string;
  complement?: string;
}

export const ModalUpdateAddress = () => {
  const { userData } = useUserContext();
  const { register, handleSubmit, setValue } = useForm();
  const { handleCloseAddress, handleOpenAddress, openAddress } =
    useModalContext();

  const onSubmit = async (data: IAddressUpdate) => {
    let response = await patchUser({ address: data }, userData!.id);

    handleCloseAddress();
  };

  useEffect(() => {
    setValue("zip_code", userData ? userData.address.zip_code : "");
    setValue("state", userData ? userData.address.state : "");
    setValue("city", userData ? userData.address.city : "");
    setValue("street", userData ? userData.address.street : "");
    setValue("number", userData ? userData.address.number : "");
  }, [handleOpenAddress, onSubmit]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openAddress}
      onClose={handleCloseAddress}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openAddress}>
        <Box>
          <Container>
            <div id="title">
              <span>Editar endereço</span>
              <AiOutlineClose
                onClick={() => {
                  handleCloseAddress();
                }}
              />
            </div>
            <h3 id="subtitle">Infomações de endereço</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="CEP"
                name="zip_code"
                width="100%"
                placeholder="00.000-000"
                register={register}
              />
              <Input
                label="Cidade"
                name="city"
                width="100%"
                placeholder="Cidade"
                register={register}
              />
              <Input
                label="Estado"
                name="state"
                width="100%"
                placeholder="Estado"
                register={register}
              />
              <Input
                label="Rua"
                name="street"
                width="100%"
                placeholder="Rua"
                register={register}
              />
              <Input
                label="Número"
                name="number"
                width="100%"
                placeholder="Número"
                register={register}
              />
              <Buttons>
                <Button
                  variant="contained"
                  id="cancel"
                  onClick={() => {
                    handleCloseAddress();
                  }}
                >
                  Cancelar
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
