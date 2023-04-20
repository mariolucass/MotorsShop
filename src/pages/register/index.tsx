import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { Register } from "../../components/register"

export const RegisterPage = () => {
    return (
        <>
            <Header isHome={true}></Header>
            <Register></Register>
            <Footer></Footer>
        </>
    )
}