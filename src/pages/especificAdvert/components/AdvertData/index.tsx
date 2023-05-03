import { Button, CardActions, CardContent, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { StyledChip } from "../../../../components";

interface iProps {
  name: string | undefined;
  price: string | undefined;
}

const AdvertData = ({ name, price }: iProps) => {
  return (
    <CardContent
      className="AdvertCard"
      sx={{ display: "flex", flexDirection: "column", gap: 3, borderRadius: 1 }}
    >
      <Typography
        component="div"
        variant="h6"
        gutterBottom
        className="card--title"
        sx={{ mb: 2 }}
      >
        {name}
      </Typography>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <StyledChip label={2012} />
          <StyledChip label={"0 KM"} />
        </Stack>
        <span className="card--price">R${price}</span>
      </Stack>
      <CardActions sx={{ p: 0 }}>
        <Button variant="contained">Comprar</Button>
      </CardActions>
    </CardContent>
  );
};

export default AdvertData;
