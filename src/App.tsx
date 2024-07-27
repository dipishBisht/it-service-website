import { Outlet, useLocation } from "react-router-dom";
import HomeHeader from "./components/Other Components/Header";
import Footer from "./components/Other Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { AboutHeader } from "./components/Other Components/AboutHeader";
import { NavbarDemo } from "./components/Other Components/NavbarDemo";
import { WebHeader } from "./components/Other Components/WebHeader";
import { AppHeader } from "./components/Other Components/AppHeader";
import { GameHeader } from "./components/Other Components/GameHeader";
import { DigitalHeader } from "./components/Other Components/DigitalHeader";
import { GraphicHeader } from "./components/Other Components/GraphicHeader";
import { ContactHeader } from "./components/Other Components/ContactHeader";

const App: React.FC = () => {
   new LocomotiveScroll();
  const location = useLocation();
  const curPage: string = location.pathname;

  return (
    <div className="overflow-x-hidden font-[Adamina] bg-[#000]">
      <NavbarDemo />
      {curPage === "/" ? (
        <HomeHeader />
      ) : curPage === "/about" ? (
        <AboutHeader />
      ) : curPage === "/services/web" ? (
        <WebHeader />
      ) : curPage === "/services/app" ? (
        <AppHeader />
      ) : curPage === "/services/game" ? (
        <GameHeader />
      ) : curPage === "/services/digital" ? (
        <DigitalHeader />
      ) : curPage === "/services/graphic" ? (
        <GraphicHeader />
      ) : (
        <ContactHeader />
      )}
      <main className="w-full mx-auto flex flex-col bg-black z-30 relative text-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
