import { useForm } from "react-hook-form";
import { Input } from "../../inputs";
import { Container, Form, Buttons, Box, Section } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import { useUserContext, useModalContext } from "../../../context";
import Button from "@mui/material/Button";
import { Alert, Backdrop, Fade, Modal } from "@mui/material";
import { IUpdateAddress, IUpdateAddressUseForm } from "../../../interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateAddressSchema } from "../../../schemas/updateAddressSchema";

export const ModalUpdateAddress = () => {
  const { userData, updateAddress } = useUserContext();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUpdateAddressUseForm>({
    resolver: zodResolver(updateAddressSchema),
  });
  const { handleCloseAddress, openAddress } = useModalContext();

  const onSubmit = async (data: IUpdateAddress) => {
    updateAddress(data, userData!.id);
    handleCloseAddress();
  };

  useEffect(() => {
    if (userData) {
      setValue("zip_code", userData ? userData.address.zip_code : "");
      setValue("state", userData ? userData.address.state : "");
      setValue("city", userData ? userData.address.city : "");
      setValue("street", userData ? userData.address.street : "");
      setValue("number", userData ? userData.address.number : "");
      setValue("complement", userData?.address?.complement ?? "");
    }
  }, [userData]);

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
              <h3>Infomações de endereço</h3>
              <AiOutlineClose
                onClick={() => {
                  handleCloseAddress();
                }}
              />
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="CEP"
                name="zip_code"
                width="100%"
                placeholder="00.000-000"
                register={register}
              />
              {errors.zip_code && (
                <Alert severity="error" id="alert">
                  {errors.zip_code!.message}
                </Alert>
              )}
              <Section>
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
              </Section>
              {errors.city && (
                <Alert severity="error" id="alert">
                  {errors.city!.message}
                </Alert>
              )}
              {errors.state && (
                <Alert severity="error" id="alert">
                  {errors.state!.message}
                </Alert>
              )}
              <Input
                label="Rua"
                name="street"
                width="100%"
                placeholder="Rua"
                register={register}
              />
              {errors.street && (
                <Alert severity="error" id="alert">
                  {errors.street!.message}
                </Alert>
              )}
              <Section>
                <Input
                  label="Número"
                  name="number"
                  width="100%"
                  placeholder="Número"
                  register={register}
                />
                <Input
                  label="Complemento"
                  name="complement"
                  width="100%"
                  placeholder="Complemento"
                  register={register}
                />
              </Section>
              {errors.number && (
                <Alert severity="error" id="alert">
                  {errors.number!.message}
                </Alert>
              )}
              {errors.complement && (
                <Alert severity="error" id="alert">
                  {errors.complement!.message}
                </Alert>
              )}
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
