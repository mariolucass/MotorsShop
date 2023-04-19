import { useEffect, useState } from "react";
import { Header } from "../../components/header"
import { Login } from "../../components/login";

export const LoginPage = () => {
    const [widthSize, setWidthSize] = useState(window.innerWidth);

    const setSize = () => {
      setWidthSize(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener("resize", setSize);
      return () => {
        window.removeEventListener("resize", setSize);
      };
    }, [widthSize]);

    return (
        <>
            <Header widthSize={widthSize}></Header>
            <Login></Login>
        </>
    )
}