import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import SparklesText from "../ui/sparkles-text";

const Accordian2 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [bgPercent, setBgPercent] = useState(100);
  const [bgReversePercent, setBgReversePercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const percentInView = Math.min(
            1,
            Math.max(
              0,
              (windowHeight - rect.top) / (windowHeight + rect.height)
            )
          );

          setBgPercent(100 - percentInView * 100);
          setBgReversePercent(percentInView * 100);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative px-20 py-28 text-white flex flex-col gap-10 overflow-hidden max-800:px-10 max-550:px-5">
      <div
        ref={divRef}
        className="absolute w-full h-full top-20 left-1/2 -translate-x-1/2 -z-10"
        style={{
          background: `conic-gradient(from 90deg at ${bgPercent}% 0%, rgba(97, 106, 115, .12), transparent 180deg) 0% 0% / 50% 100% no-repeat, conic-gradient(from 270deg at ${bgReversePercent}% 0%, transparent 180deg, rgba(97, 106, 115, .12)) 100% 0% / 50% 100% no-repeat`,
        }}
      />
      <div className="flex flex-col gap-5">
        <h2 className="text-xl text-[#b9b9b9]">FAQ</h2>
        <SparklesText
          text="Frequently ask Questions"
          sparklesCount={2}
          isBig={true}
        />
      </div>
      <div className="">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span className="text-3xl text-left max-1100:text-2xl max-900:text-xl max-550:text-lg">
                What technologies do you use for web development?
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[80vw] leading-[35px] max-550:text-sm max-550:max-w-none">
              We use a range of technologies for web development, including
              HTML, CSS, JavaScript, and frameworks like React, Angular, and
              Vue.js. Our backend solutions often involve Node.js, Python
              (Django/Flask), and PHP (Laravel).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <span className="text-3xl text-left max-1100:text-2xl max-900:text-xl max-550:text-lg">
                Can you develop apps for both iOS and Android?
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[80vw] leading-[35px] max-550:text-sm max-550:max-w-none">
              Yes, we develop apps for both iOS and Android platforms. We use
              technologies like React Native and Flutter for cross-platform
              development, as well as Swift and Kotlin for native development.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <span className="text-3xl text-left max-1100:text-2xl max-900:text-xl max-550:text-lg">
                What is your process for developing a game?
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[80vw] leading-[35px] max-550:text-sm max-550:max-w-none">
              Our game development process includes initial concept creation,
              design and prototyping, development using engines like Unity or
              Unreal, and rigorous testing. We focus on creating engaging and
              immersive experiences for players.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <span className="text-3xl text-left max-1100:text-2xl max-900:text-xl max-550:text-lg">
                How do you ensure the quality of your graphic designs?
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[80vw] leading-[35px] max-550:text-sm max-550:max-w-none">
              We ensure high-quality graphic designs through a collaborative
              process that involves understanding client requirements, multiple
              design iterations, and feedback incorporation. Our designers use
              tools like Adobe Creative Suite to create visually stunning
              graphics.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <span className="text-3xl text-left max-1100:text-2xl max-900:text-xl max-550:text-lg">
                What digital marketing strategies do you implement?
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[80vw] leading-[35px] max-550:text-sm max-550:max-w-none">
              We implement a variety of digital marketing strategies, including
              SEO, PPC, social media marketing, content marketing, and email
              campaigns. Our goal is to increase your online visibility and
              drive traffic to your site, leading to higher conversion rates.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Accordian2;
