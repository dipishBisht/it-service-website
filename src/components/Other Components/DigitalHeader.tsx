import { SparklesPreview } from "../magicui/SparklePreview";

export const DigitalHeader = () => {
  return (
    <div className="relative text-white h-[80vh] pl-16 pt-28 flex flex-col gap-5 max-800:pl-10 max-550:pl-0 max-550:px-5">
        <div className="absolute w-full h-full top-0 right-0 bg-[url(/src/assets/digitalHeadBg.png)] bg-contain bg-no-repeat bg-right"/>
        <div className="absolute h-full w-full bg-[#0000005a]" />
      <SparklesPreview text="Digital Marketing" maxWidth="w-[800px]" />
    </div>
  );
};
