import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography, useMediaQuery } from "@mui/material";
import Stack from "@mui/material/Stack";

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
}

export const ProductCard = ({ element }: IPropsProductCard) => {
  const priceFormatted = element.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const matches500 = useMediaQuery("(min-width:500px)");
  const matches700 = useMediaQuery("(min-width:700px)");
  const matches1200 = useMediaQuery("(min-width:1200px)");

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
      {/* <img src={element.img} alt={element.title} /> */}

      <CardContent sx={{ gap: 2, display: "flex", flexDirection: "column" }}>
        <Typography component="div" variant="h6" gutterBottom>
          {element.title}
        </Typography>

        <Typography variant="body2">{element.description}</Typography>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={element.user.name} src={element.user.img} />

          <span>{element.user.name}</span>
        </Stack>

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
            spacing={2}
          >
            <span>{element.mileage} KM</span>

            <span>{element.manufacturing_year}</span>
          </Stack>

          <span className="product__price">{priceFormatted}</span>
        </Stack>
      </CardContent>
    </Card>
  );
};
