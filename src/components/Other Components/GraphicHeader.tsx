import { SparklesPreview } from "../magicui/SparklePreview";

export const GraphicHeader = () => {
  return (
    <div className="relative text-white h-[80vh] pl-16 flex flex-col gap-5 max-800:pl-10 max-550:pl-0 max-550:px-5">
      <div className="absolute w-2/3 top-0 right-0 h-full bg-cover bg-no-repeat bg-right bg-[url(/src/assets/graphic.png)] max-550:w-full max-550:bg-center" />
      <div className="absolute h-full w-full bg-[#0000005a]" />
      <SparklesPreview text="Graphic Designing" maxWidth="w-[800px]" />
    </div>
  );
};
