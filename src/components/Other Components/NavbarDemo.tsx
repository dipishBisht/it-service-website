import { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../lib/utils";
import { MobileNav } from "./MobileNav";
import { useLocation } from "react-router-dom";

export function NavbarDemo() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);
  const location = useLocation();//
  const currentPath = location.pathname;//

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {//
    window.scrollTo({ top: 0, behavior: 'smooth' });//
  }, [currentPath]);//

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {isMobile ? <MobileNav /> : <Navbar />}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-2 inset-x-0 max-w-4xl mx-auto z-[1000]",
        className
      )}
    >
      <Menu setActive={setActive}>
        <HoveredLink path="/" onClick={() => setActive(null)}>Home</HoveredLink>
        <HoveredLink path="/about" onClick={() => setActive(null)}>About</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Web Development"
              href="/services/web"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
              setActive={setActive}
            />
            <ProductItem
              title="Game Development"
              href="/services/game"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
              setActive={setActive}
            />
            <ProductItem
              title="App Development"
              href="/services/app"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
              setActive={setActive}
            />
            <ProductItem
              title="Graphic Designing"
              href="/services/graphic"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              setActive={setActive}
            />
            <ProductItem
              title="Digital Marketing"
              href="/services/digital"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              setActive={setActive}
            />
          </div>
        </MenuItem>
        <HoveredLink path="/contact" onClick={() => setActive(null)}>Contact</HoveredLink>
      </Menu>
    </div>
  );
}
