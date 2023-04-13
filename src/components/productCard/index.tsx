import { ProductCardStyled } from "./style";
import Avatar from "@mui/material/Avatar";

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

  return (
    <ProductCardStyled>
      <div className="product__div__img">
        <img src={element.img} alt={element.title} />
      </div>

      <div>
        <h3 className="product__title">{element.title}</h3>
      </div>

      <div>
        <p className="product__description">{element.description}</p>
      </div>

      <div className="product__user">
        <Avatar alt={element.user.name} src={element.user.img} />

        <span>{element.user.name}</span>
      </div>

      <div className="product_infos">
        <div className="product__tags">
          <span>{element.mileage} KM</span>

          <span>{element.manufacturing_year}</span>
        </div>

        <span className="product__price">{priceFormatted}</span>
      </div>
    </ProductCardStyled>
  );
};
