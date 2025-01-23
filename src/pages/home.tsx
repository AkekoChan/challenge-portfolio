import Header from "../components/common/header/Header";
import Productions from "../components/home/productions/Productions";
import { data } from "../data/HeaderData";
import useTitle from "../hooks/useTitle";
import Footer from "./../components/common/footer/Footer";
import Hero from "./../components/home/Hero";

const home = () => {
  useTitle("Acceuil - Portfolio Lucas Martin");

  return (
    <>
      <Header links={data} />
      <Hero />
      <Productions />
      <Footer subtitle="02." />
    </>
  );
};

export default home;
