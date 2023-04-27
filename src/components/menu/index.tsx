import StyledMenu from "./style";
import { useMediaContext } from "../../context/MediaContext";
import { useFilterContext } from "../../context/FilterContext";

export const Menu = () => {
  const { matches500, matches700 } = useMediaContext();
  const { showFilter } = useFilterContext();
  return (
    <StyledMenu className={showFilter ? "ocult" : ""}>
      <section></section>
      <img
        src="https://1.bp.blogspot.com/-RtAyYJ-wDMI/UqHHITQj9dI/AAAAAAAAF5s/-MZKETwfxn0/s1600/carro_top2.pngs"
        alt=""
      />
      <div>
        <p
          className={
            matches500
              ? "heading6-600"
              : matches700
              ? "heading5-600"
              : "heading2-600"
          }
        >
          Motors Shop
        </p>
        <p
          className={
            matches500
              ? "heading6-600"
              : matches700
              ? "heading5-600"
              : "heading2-600"
          }
        >
          A melhor plataforma de anúncios de carros do país
        </p>
      </div>
    </StyledMenu>
  );
};
