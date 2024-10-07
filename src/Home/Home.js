import AboutComponent from "../componentsHome/AboutComponent";
import Footer from "../componentsHome/FooterComponent";
import IntroComponent from "../componentsHome/IntroComponent";
import NavbarComponent from "../componentsHome/NavbarComponent";
import ProductComponent from "../componentsHome/ProductComponent";
import SocialMedia from "../componentsHome/SocialMediaComponent";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <IntroComponent />
      <ProductComponent/>
      <AboutComponent/>
      <SocialMedia/>
      <Footer/>
    </>
  );
}
