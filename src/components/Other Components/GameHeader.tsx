import { SparklesPreview } from "../magicui/SparklePreview";

export const GameHeader = () => {
  return (
    <div className="relative text-white h-[80vh] pl-16 pt-28 flex flex-col gap-5 max-800:pl-10 max-550:pl-0 max-550:px-5">
      <div className="absolute inset-0 h-full w-full bg-[url(/src/assets/game.png)] bg-contain bg-right bg-no-repeat"/>
      <div className="absolute h-full w-full bg-[#0000005a]" />
      <SparklesPreview text="Game Development" maxWidth="w-[800px]" />
    </div>
  );
};
