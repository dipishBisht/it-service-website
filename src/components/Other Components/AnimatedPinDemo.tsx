import { PinContainer } from "../ui/3d-pin";
import DotPattern from "../ui/dot-pattern";
import SparklesText from "../ui/sparkles-text";
import { Link } from "react-router-dom";

export function AnimatedPinDemo() {
  return (
    <div className="w-full relative bg-white py-20 px-16 max-800:px-10 max-550:px-5">
      <div>
        <DotPattern />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-2 text-black">
          <SparklesText
            className="font-bold"
            text="Our"
            sparklesCount={2}
          />
          <SparklesText
            className="font-thin text-4xl"
            text="Projects"
            sparklesCount={2}
            isBig={true}
          />
        </div>
        <div className="flex justify-center gap-5 flex-wrap gap-y-20">
          <PinContainer
            title="Visit Website"
            href="https://cancerheal.co.in/index.html"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs pb-2 !m-0 text-2xl font-bold max-800:text-xl text-slate-100">
                Cancer Heal
              </h3>
              <img
                className="flex flex-1 w-full rounded-lg mt-4 object-contain"
                src="/src/assets/cancerHeal.png"
                alt=""
              />
            </div>
          </PinContainer>
          <PinContainer
            title="Visit Website"
            href="https://hotelswale.com/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs pb-2 !m-0 text-2xl font-bold max-800:text-xl text-slate-100">
                Hotelswale
              </h3>
              <img
                className="flex flex-1 w-full rounded-lg mt-4 object-contain"
                src="/src/assets/hotelswale.png"
                alt=""
              />
            </div>
          </PinContainer>
          <PinContainer
            title="Visit Website"
            href="https://ineptstudio.com/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs pb-2 !m-0 text-2xl font-bold max-800:text-xl text-slate-100">
                Inept Stuio
              </h3>
              <img
                className="flex flex-1 w-full rounded-lg mt-4 object-contain"
                src="/src/assets/ineptStudio.png"
                alt=""
              />
            </div>
          </PinContainer>
        </div>
        <Link
          to="/projects"
          className="bg-black w-fit relative z-10 ml-auto mr-32 mt-10"
        >
        </Link>
      </div>
    </div>
  );
}
