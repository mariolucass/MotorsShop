import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import StyledChip from "../chip";
import { useContext } from "react";
import { MidiaContext } from "../../context";

export interface IProduct {
  title: string;
  img: string;
  description: string;
  price: number;
  mileage: number;
  manufacturing_year: number;

  user: {
    img: string;
    name: string;
  };
}

interface IPropsProductCard {
  element: IProduct;
  isProfile?: boolean;
}

export const ProductCard = ({ element, isProfile }: IPropsProductCard) => {
  const priceFormatted = element.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const { matches500, matches700, matches1200 } = useContext(MidiaContext);

  const cardSize = () => {
    if (matches1200) {
      return { width: "30%", maxWidth: 312 };
    }

    if (matches700) {
      return { width: "45%" };
    }

    if (matches500) {
      return { width: "60%" };
    }

    return { width: "80%" };
  };

  return (
    <Card variant="outlined" sx={cardSize}>
      <CardMedia
        component={"img"}
        height={"175"}
        image={element.img}
        alt={element.title}
      />

      <CardContent
        sx={{
          gap: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component="div"
          variant="h6"
          gutterBottom
          className="card--title"
        >
          {element.title}
        </Typography>

        <Typography
          className="card--description"
          variant="body2"
          sx={{ overflowX: "auto" }}
        >
          {element.description}
        </Typography>

        <>
          {!isProfile && (
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar alt={element.user.name} src={element.user.img} />

              <span className="card--user">{element.user.name}</span>
            </Stack>
          )}
        </>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0.5}
          >
            <StyledChip label={`${element.mileage} KM`} />

            <StyledChip label={element.manufacturing_year} />
          </Stack>

          <span className="card--price">{priceFormatted}</span>
        </Stack>

        <>
          {isProfile && (
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1.5}
            >
              <Button
                variant="outlined"
                color="secondary"
                sx={{ fontWeight: 600, textTransform: "unset", fontSize: 12 }}
              >
                Editar
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ fontWeight: 600, textTransform: "unset", fontSize: 12 }}
              >
                Ver detalhes
              </Button>
            </Stack>
          )}
        </>
      </CardContent>
    </Card>
  );
};
