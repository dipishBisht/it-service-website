import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import SparklesText from "../ui/sparkles-text";

const Accordian = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [bgPercent, setBgPercent] = useState(100);
  const [bgReversePercent, setBgReversePercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate how much the component is in view
          const percentInView = Math.min(
            1,
            Math.max(
              0,
              (windowHeight - rect.top) / (windowHeight + rect.height)
            )
          );

          // Update the background percentages based on scroll position
          setBgPercent(100 - percentInView * 100);
          setBgReversePercent(percentInView * 100);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative px-20 py-20 text-white flex flex-col gap-10 max-800:px-10 max-550:px-5">
      <div
        ref={divRef}
        className="absolute -z-10 w-full h-full left-1/2 top-20 -translate-x-1/2"
        style={{
          background: `conic-gradient(from 90deg at ${bgPercent}% 0%, rgba(97, 106, 115, .12), transparent 180deg) 0% 0% / 50% 100% no-repeat, conic-gradient(from 270deg at ${bgReversePercent}% 0%, transparent 180deg, rgba(97, 106, 115, .12)) 100% 0% / 50% 100% no-repeat`,
        }}
      />
      <div className="flex flex-col gap-5">
        <h2 className="text-xl text-[#b9b9b9]">What We Do</h2>
        <SparklesText text="Services" sparklesCount={2} isBig={true} />
      </div>
      <div className="">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span>Web Development</span>
            </AccordionTrigger>
            <AccordionContent>
              Our web development team crafts dynamic, responsive websites
              tailored to your business needs. From elegant corporate sites to
              robust e-commerce platforms, we ensure a seamless user experience
              with cutting-edge technologies and intuitive design.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <span>Game Development</span>
            </AccordionTrigger>
            <AccordionContent>
              Immerse your audience in captivating digital worlds with our game
              development expertise. We design and develop engaging games with
              stunning graphics and seamless gameplay, ensuring a thrilling
              experience across multiple platforms.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <span>App Development</span>
            </AccordionTrigger>
            <AccordionContent>
              Our app development service turns innovative ideas into functional
              mobile applications. We specialize in creating intuitive,
              user-friendly apps for iOS and Android, focusing on performance,
              security, and scalability to bring your vision to life.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <span>Graphic Designing</span>
            </AccordionTrigger>
            <AccordionContent>
              Our graphic design services bring your brand to life through
              visually compelling designs. From logos and marketing materials to
              complete brand identities, we create stunning visuals that
              communicate your message and captivate your audience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <span>Digital Marketing</span>
            </AccordionTrigger>
            <AccordionContent>
              Boost your online presence and drive engagement with our digital
              marketing strategies. We offer comprehensive services including
              SEO, social media marketing, and PPC campaigns, tailored to
              enhance your brand's reach and convert visitors into loyal
              customers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Accordian;
