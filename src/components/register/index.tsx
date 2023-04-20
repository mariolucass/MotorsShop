import { Box, Container, Form, Title, SubTitle, Division } from "./style"
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import Alert from '@mui/material/Alert';
import { z } from "zod";
import { registerSchema } from "../../schemas/registerSchema";

interface IRegister {
    name: string
    email: string
    cpf: string
    celular: string
    birthday: string
    description: string
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement: string
    type_account?: string
    password: string
    confirm_password: string
}

type IRegisterUseForm = z.infer<typeof registerSchema>

export const Register = () => {
    const [toggle, setToggle] = useState("")
    const {register, handleSubmit, formState: {errors}} = useForm<IRegisterUseForm>({ resolver: zodResolver(registerSchema)})

    const handleToggle = ( event: React.MouseEvent<HTMLElement>, value: string) => {
        setToggle(value)
        console.log(value)
    };

    const registerUser = (data: IRegister) => {
        console.log(toggle)
        console.log("Infos de registro:", {type_account: toggle, ...data})
    }


    return (
        <Container>
            <Box>
                <Title>Cadastro</Title>
                <Form onSubmit={handleSubmit(registerUser)}>
                    <SubTitle>Informações Pessoais</SubTitle>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" placeholder="Ex: Samuel Leão" {...register("name")}/>
                    {errors.name && 
                    <Alert severity="error" id="alert">{errors.name!.message}</Alert>}

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Ex: samuel@kenzie.com.br" {...register("email")}/>
                    {errors.email && 
                    <Alert severity="error" id="alert">{errors.email!.message}</Alert>}

                    <label htmlFor="cpf">CPF</label>
                    <input type="text" id="cpf" placeholder="000.000.000-00" {...register("cpf")}/>
                    {errors.cpf && 
                    <Alert severity="error" id="alert">{errors.cpf!.message}</Alert>}

                    <label htmlFor="celular">Celular</label>
                    <input type="text" id="celular" placeholder="(DDD) 90000-0000" {...register("celular")}/>
                    {errors.celular && 
                    <Alert severity="error" id="alert">{errors.celular!.message}</Alert>}

                    <label htmlFor="birthday">Data de nascimento</label>
                    <input type="text" id="birthday" placeholder="00/00/00" {...register("birthday")}/>
                    {errors.birthday && 
                    <Alert severity="error" id="alert">{errors.birthday!.message}</Alert>}

                    <label htmlFor="description">Descrição</label>
                    <textarea id="description" placeholder="Digitar descrição" {...register("description")}></textarea>

                    <SubTitle>Informações de endereço</SubTitle>
                    <label htmlFor="cep">CEP</label>
                    <input type="text" id="cep" placeholder="00000.000" {...register("cep")}/>
                    {errors.cep && 
                    <Alert severity="error" id="alert">{errors.cep!.message}</Alert>}

                    <Division>
                        <div>
                        <label htmlFor="state">Estado</label>
                        <input type="text" id="state" placeholder="Digitar Estado" {...register("state")}/>
                        </div>

                        <div>
                        <label htmlFor="city">Cidade</label>
                        <input type="text" id="city" placeholder="Digitar Cidade" {...register("city")}/>
                        </div> 
                    </Division>
                    {errors.state && 
                    <Alert severity="error" id="alert">{errors.state!.message}</Alert>}
                    {errors.city && 
                    <Alert severity="error" id="alert">{errors.city!.message}</Alert>}

                    <label htmlFor="street">Rua</label>
                    <input type="text" id="street" placeholder="Digitar Rua" {...register("street")}/>
                    {errors.street && 
                    <Alert severity="error" id="alert">{errors.street!.message}</Alert>}

                    <Division>
                        <div>
                        <label htmlFor="number">Número</label>
                        <input type="text" id="number" placeholder="Digitar número" {...register("number")}/>
                        </div>

                        <div>
                        <label htmlFor="complement">Complemento</label>
                        <input type="text" id="complement" placeholder="Ex: apart 307" {...register("complement")}/>
                        </div>
                    </Division>
                    {errors.number && 
                    <Alert severity="error" id="alert">{errors.number!.message}</Alert>}
                    {errors.complement && 
                    <Alert severity="error" id="alert">{errors.complement!.message}</Alert>}

                    <SubTitle >Tipo de conta</SubTitle>
                    <Division>
                        <ToggleButtonGroup
                        color="primary"
                        value={toggle}
                        exclusive
                        onChange={handleToggle}
                        aria-label="Platform"
                        id="toggle"
                        >
                            <ToggleButton value="buyer" 
                        {...register("type_account")}>Comprador</ToggleButton>
                            <ToggleButton value="advertiser" 
                        {...register("type_account")}>Anunciante</ToggleButton>
                        </ToggleButtonGroup>
                    </Division>

                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" placeholder="Digitar senha" {...register("password")}/>
                    {errors.password && 
                    <Alert severity="error" id="alert">{errors.password!.message}</Alert>}

                    <label htmlFor="confirm_password">Confirmar senha</label>
                    <input type="password" id="confirm_password" placeholder="Digitar senha" {...register("confirm_password")}/>
                    {errors.confirm_password && 
                    <Alert severity="error" id="alert">{errors.confirm_password!.message}</Alert>}

                    <Button variant="contained" type="submit" id="finished_register">Finalizar Cadastro</Button>
                </Form>
            </Box>
        </Container>
    )
}