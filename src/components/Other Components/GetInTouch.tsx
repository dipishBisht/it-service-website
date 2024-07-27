import { useEffect, useRef, useState } from "react";
import Btn from "./Btn";
import SparklesText from "../ui/sparkles-text";

const GetInTouch = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [bgPercent, setBgPercent] = useState(100);
  const [bgReversePercent, setBgReversePercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (formRef.current) {
        const rect = formRef.current.getBoundingClientRect();
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
    <>
      <div
        className="relative text-white flex flex-col px-20 gap-12 py-20 max-800:px-10 max-550:px-5"
      >
        <div
        ref={formRef} className="absolute -z-10 w-full h-full left-1/2 top-20 -translate-x-1/2"
        style={{
          background: `conic-gradient(from 90deg at ${bgPercent}% 0%, rgba(97, 106, 115, .12), transparent 180deg) 0% 0% / 50% 100% no-repeat, conic-gradient(from 270deg at ${bgReversePercent}% 0%, transparent 180deg, rgba(97, 106, 115, .12)) 100% 0% / 50% 100% no-repeat`,
        }}
      />
        <h2 className="text-xl text-[#b9b9b9]">Get in Touch</h2>
        <div className="text-5xl font-medium max-w-[250px] flex flex-col justify-center gap-4">
          <div className="flex items-end gap-5">
            <SparklesText className="font-bold" text="Drop" sparklesCount={2} />
            <SparklesText className="font-thin" text="Us" sparklesCount={2} isBig={true} />
          </div>
          <div className="flex items-end gap-5">
            <SparklesText className="font-bold" text="a" sparklesCount={2} />
            <SparklesText className="font-thin" text="Line" sparklesCount={2} isBig={true} />
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex gap-10 max-550:flex-col">
            <div className="flex flex-col w-1/2">
              <label htmlFor="name" className="text-xl">
                Name *
              </label>
              <input
                id="name"
                className="bg-transparent border-b-[1px] border-[#333] outline-none h-[50px]"
                type="text"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="email" className="text-xl">
                Email Address *
              </label>
              <input
                id="email"
                className="bg-transparent border-b-[1px] border-[#333] outline-none h-[50px]"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-xl">
              Message *
            </label>
            <textarea
              id="message"
              rows={4}
              className="bg-transparent border-b-[1px] border-[#333] outline-none max-w-[800px] py-2"
            />
          </div>
        </div>
        <Btn heading="Send Message" />
      </div>
    </>
  );
};

export default GetInTouch;
