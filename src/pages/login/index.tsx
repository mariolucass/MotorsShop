import { Header } from "../../components/header"
import { Login } from "../../components/login";
import { Footer } from "../../components/footer";

export const LoginPage = () => {

    return (
        <>
            <Header isHome={true}></Header>
            <Login></Login>
            <Footer></Footer>
        </>
    )
}