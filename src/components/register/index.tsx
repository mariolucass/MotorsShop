import { Box, Container, Form, Title, SubTitle, Division } from "./style"
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";

export const Register = () => {
    const [toggle, setToggle] = useState("")

    const handleChange = ( event: React.MouseEvent<HTMLElement>, value: string) => {
        setToggle(value)
    };

    return (
        <Container>
            <Box>
                <Title>Cadastro</Title>
                <Form>
                    <SubTitle>Informações Pessoais</SubTitle>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" placeholder="Ex: Samuel Leão"/>

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Ex: samuel@kenzie.com.br"/>

                    <label htmlFor="cpf">CPF</label>
                    <input type="text" id="cpf" placeholder="000.000.000-00"/>

                    <label htmlFor="celular">Celular</label>
                    <input type="text" id="celular" placeholder="(DDD) 90000-0000"/>

                    <label htmlFor="birthday">Data de nascimento</label>
                    <input type="text" id="birthday" placeholder="00/00/00"/>

                    <label htmlFor="description">Descrição</label>
                    <textarea id="description" placeholder="Digitar descrição"></textarea>

                    <SubTitle>Informações de endereço</SubTitle>
                    <label htmlFor="cep">CEP</label>
                    <input type="text" id="cep" placeholder="00000.000"/>

                    <Division>
                        <div>
                        <label htmlFor="state">Estado</label>
                        <input type="text" id="state" placeholder="Digitar Estado"/>
                        </div>

                        <div>
                        <label htmlFor="city">Cidade</label>
                        <input type="text" id="city" placeholder="Digitar Cidade"/>
                        </div> 
                    </Division>

                    <label htmlFor="street">Rua</label>
                    <input type="text" id="street" placeholder="Digitar Rua"/>

                    <Division>
                        <div>
                        <label htmlFor="number">Número</label>
                        <input type="text" id="street" placeholder="Digitar número"/>
                        </div>

                        <div>
                        <label htmlFor="complement">Complemento</label>
                        <input type="text" id="complement" placeholder="Ex: apart 307"/>
                        </div>
                    </Division>


                    <SubTitle >Tipo de conta</SubTitle>
                    <Division>
                        <ToggleButtonGroup
                        color="primary"
                        value={toggle}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                        id="toggle"
                        >
                            <ToggleButton value="buyer" >Comprador</ToggleButton>
                            <ToggleButton value="advertiser">Anunciante</ToggleButton>
                        </ToggleButtonGroup>
                    </Division>

                    <label htmlFor="password">Senha</label>
                    <input type="text" id="password" placeholder="Digitar senha"/>

                    <label htmlFor="confirm_password">Confirmar senha</label>
                    <input type="text" id="confirm_password" placeholder="Digitar senha"/>

                    <Button variant="contained" type="submit" id="finished_register">Finalizar Cadastro</Button>
                </Form>
            </Box>
        </Container>
    )
}