import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useModalContext, useUserContext } from "../../context";
import {
  RxDashboard,
  RxPerson,
  RxHome,
  RxDrawingPinFilled,
  RxArrowLeft,
} from "react-icons/rx";
import {
  Box,
  Drawer,
  IconButton,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface IProps {
  isLogged?: boolean;
}

export const BurguerMenu = ({ isLogged }: IProps) => {
  const [openBurguerMenu, setOpenBurguerMenu] = useState(false);

  const { userData, logoutUser } = useUserContext();
  const { handleOpenAddress, handleOpenUpdateUser } = useModalContext();

  const toggleBurguerMenu = () => setOpenBurguerMenu(!openBurguerMenu);

  const RenderMenuItens = () => (
    <Box sx={{ p: 2 }}>
      <ListItemButton component={Link} to="/dashboard">
        <ListItemIcon>
          <RxDashboard />
        </ListItemIcon>

        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton onClick={handleOpenUpdateUser}>
        <ListItemIcon>
          <RxPerson />
        </ListItemIcon>

        <ListItemText primary="Editar Perfil" />
      </ListItemButton>

      <ListItemButton onClick={handleOpenAddress}>
        <ListItemIcon>
          <RxHome />
        </ListItemIcon>

        <ListItemText primary="Editar Endereço" />
      </ListItemButton>

      {userData?.role === "SELLER" && (
        <ListItemButton component={Link} to="/profile">
          <ListItemIcon>
            <RxDrawingPinFilled />
          </ListItemIcon>

          <ListItemText primary="Meus anúncios" />
        </ListItemButton>
      )}

      <ListItemButton onClick={logoutUser}>
        <ListItemIcon>
          <RxArrowLeft />
        </ListItemIcon>

        <ListItemText primary="Logout" />
      </ListItemButton>
    </Box>
  );

  const RenderAuthButtons = () => (
    <Box sx={{ p: 2 }}>
      <ListItemButton component={Link} to="/login">
        <ListItemIcon>
          <RxArrowLeft />
        </ListItemIcon>

        <ListItemText primary="Login" />
      </ListItemButton>

      <ListItemButton component={Link} to="/register">
        <ListItemIcon>
          <RxArrowLeft />
        </ListItemIcon>

        <ListItemText primary="Register" />
      </ListItemButton>
    </Box>
  );

  return (
    <>
      <IconButton onClick={toggleBurguerMenu}>
        <HiMenu />
      </IconButton>

      <Drawer open={openBurguerMenu} anchor="right">
        <IconButton sx={{ mb: 2 }} onClick={toggleBurguerMenu}>
          <HiX />
        </IconButton>

        <Divider sx={{ mb: 2 }} />
        {isLogged ? <RenderMenuItens /> : <RenderAuthButtons />}
      </Drawer>
    </>
  );
};
