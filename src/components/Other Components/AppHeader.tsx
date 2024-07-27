import { SparklesPreview } from "../magicui/SparklePreview";

export const AppHeader = () => {
  return (
    <div className="relative text-white h-[60vh] pl-16 pt-28 flex flex-col gap-5 max-800:pl-10 max-550:pl-0 max-550:px-5">
      <SparklesPreview text="App Development" maxWidth="w-[800px]" />
    </div>
  );
};
