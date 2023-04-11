import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="*" element={<Navigate to="/home"/>}></Route>
        </Routes>
    )
}