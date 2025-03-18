import ProductShowcase from "./Components/Addsection";
import HeroSection from "./Components/Herosection";
import WhyWelMakeSection from "./Components/Midsection";
import WelMakeNavbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="">
      <WelMakeNavbar></WelMakeNavbar>
      <HeroSection></HeroSection>
      <WhyWelMakeSection></WhyWelMakeSection>
      <ProductShowcase></ProductShowcase>
    </div>
  );
}
