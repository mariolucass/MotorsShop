import { useForm } from "react-hook-form"
import { ModalGeneral } from ".."
import { Input } from "../../inputs"
import { Container, Form, DivisionTypes, Buttons } from "./style"
import { AiOutlineClose } from "react-icons/ai"
import { useEffect } from "react"
import { useUserContext } from "../../../context/UserContext"
import Button from '@mui/material/Button';
import { useModalContext } from "../../../context"

interface IUserUpdate {
    name?: string
    email?: string
    password?: string
    phone?: string
    birthdate?: Date
    description?: string 
    role?: string 
}

export const ModalUpdateDeleteUser = () => {
    const {userProfile, userData} = useUserContext()
    const {register, handleSubmit} = useForm()
    const {handleClose} = useModalContext()
    
    const onSubmit = (data: IUserUpdate ) => {
        console.log(data)
    }

    useEffect(() => {
        userProfile()
    }, [userProfile])

    return (
        <ModalGeneral>
            <Container>
                <div id="title">
                    <span>Editar perfil</span>
                    <AiOutlineClose onClick={()=>{handleClose()}}/>
                </div>
                <h3 id="subtitle">Informações pessoais</h3>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Nome" name="name" width="100%" placeholder="Nome completo" register={register} value={userData?.name}/>
                    <Input label="Email" name="email" width="100%" placeholder="Email" register={register} value={userData?.email}/>
                    <Input label="Senha" name="password" width="100%" placeholder="Senha" register={register} value={userData?.email}/>
                    <Input label="CPF" name="cpf" width="100%" placeholder="000.000.000-00" register={register} value={userData?.cpf}/>
                    <Input label="Celular" name="phone" width="100%" placeholder="(00) 00000-0000" register={register} value={userData?.phone}/>
                    <Input label="Data de Nascimento" name="birthdate" width="100%" placeholder="DD/MM/AAAA" register={register} value={userData?.birthdate}/>
                    <textarea placeholder="Descrição...">
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
                    <span>Endereço</span>
                    <Input label="Cidade" name="city" width="100%" placeholder="Cidade" register={register} value={userData?.address.city}/>
                    <Input label="Estado" name="state" width="100%" placeholder="Estado" register={register} value={userData?.address.state}/>
                    <Input label="Bairro" name="street" width="100%" placeholder="Bairro" register={register} value={userData?.address.street}/>
                    <Input label="Número" name="number" width="100%" placeholder="Número" register={register} value={userData?.address.number}/>
                    <Buttons>
                        <Button variant="contained" id="cancel" onClick={()=>{handleClose()}}>Cancelar</Button>
                        <Button variant="contained" id="delete">Excluir</Button>
                        <Button variant="contained" id="update">Salvar Alterações</Button>
                    </Buttons>
                </Form>
            </Container>
        </ModalGeneral>
    )
}