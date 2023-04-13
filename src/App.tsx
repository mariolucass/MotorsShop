import { Footer } from "./components/footer";
import { IProduct, ProductCard } from "./components/productCard";
const listMockedCars: IProduct[] = [
  {
    img: "https://www.autoracing.com.br/wp-content/uploads/2022/12/S22_4012.jpg",
    title: "Porsche - Taycan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eos tenetur sapiente voluptates quia quod corrupti non quam, sit nemo doloribus impedit libero dolorem iusto harum quos. Fugiat, voluptas molestiae.",
    price: 230000,
    mileage: 0,
    manufacturing_year: 2019,
    user: {
      name: "Camila",
      img: "https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-3.svg",
    },
  },
  // {
  //   img: "https://www.autoracing.com.br/wp-content/uploads/2022/12/S22_4012.jpg",
  //   title: "Porsche - Taycan",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eos tenetur sapiente voluptates quia quod corrupti non quam, sit nemo doloribus impedit libero dolorem iusto harum quos. Fugiat, voluptas molestiae.",
  //   price: 230000,
  //   mileage: 0,
  //   manufacturing_year: 2019,
  //   user: {
  //     name: "Camila",
  //     img: "https://raw.githubusercontent.com/maidi29/custom-avatar-generator/images/images/avatar-example-3.svg",
  //   },
  // },
];

const App = () => {
  const list = listMockedCars.map((element) => {
    return <ProductCard element={element} key={element.title} />;
  });
  return (
    <div className="App">
      {list}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
