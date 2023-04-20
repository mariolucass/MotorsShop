import { Box, Container, Form, Title } from "./style"
import Button from '@mui/material/Button';

export const Register = () => {
    return (
        <Container>
            <Box>
                <Title>Cadastro</Title>
                <Form>
                    <span>Informações Pessoais</span>
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

                    <span>Informações de endereço</span>
                    <label htmlFor="cep">CEP</label>
                    <input type="text" id="cep" placeholder="00000.000"/>

                    <div>
                        <div>
                        <label htmlFor="state">Estado</label>
                        <input type="text" id="state" placeholder="Digitar Estado"/>
                        </div>

                        <div>
                        <label htmlFor="city">Cidade</label>
                        <input type="text" id="city" placeholder="Digitar Cidade"/>
                        </div> 
                    </div>

                    <label htmlFor="street">Rua</label>
                    <input type="text" id="street" placeholder="Digitar Rua"/>

                    <div>
                        <div>
                        <label htmlFor="number">Número</label>
                        <input type="text" id="street" placeholder="Digitar número"/>
                        </div>

                        <div>
                        <label htmlFor="complement">Complemento</label>
                        <input type="text" id="complement" placeholder="Ex: apart 307"/>
                        </div>
                    </div>


                    <span>Tipo de conta</span>
                    <div>

                    </div>

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