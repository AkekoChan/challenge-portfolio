import About from "../components/about/About";
import Hoobies from "../components/about/hobbies/Hoobies";
import Skills from "../components/about/Skills";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import { data } from "../data/HeaderData";
import useTitle from "../hooks/useTitle";
import Journey from "./../components/about/journey/Journey";

const about = () => {
  useTitle("A propos - Portfolio Lucas Martin");

  return (
    <>
      <Header links={data} />
      <About />
      <Hoobies />
      <Skills />
      <Journey />
      <Footer subtitle="05." />
    </>
  );
};

export default about;
