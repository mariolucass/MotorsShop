import { motion } from "framer-motion";
import { IPropsProductCard } from "../../interfaces";
import { Typography, CardContent, CardMedia, Card } from "@mui/material";
import { monetizeString } from "../../utils";

export const LastPromotionsCard = ({ element, onClick }: IPropsProductCard) => (
  <Card
    variant="outlined"
    sx={{ width: "100%", cursor: "pointer", maxWidth: 450 }}
    onClick={onClick}
    component={motion.div}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.87 }}
  >
    <CardMedia
      component={"img"}
      height={"175"}
      image={element.cover.url}
      alt={element.model}
      sx={{ borderRadius: "0px 0px 32px 32px" }}
    />

    <CardContent
      sx={{
        gap: 2,
        height: 150,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <Typography
        component="div"
        variant="h6"
        gutterBottom
        className="card--title"
        sx={{ fontFamily: "Lexend", minHeight: 64 }}
      >
        {element.model}
      </Typography>

      <Typography
        component="div"
        variant="h6"
        gutterBottom
        sx={{ fontFamily: "Lexend", minHeight: 64, color: "#4529e6" }}
      >
        {monetizeString(+element.price)}
      </Typography>
    </CardContent>
  </Card>
);
