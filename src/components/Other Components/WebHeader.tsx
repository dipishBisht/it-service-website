import { SparklesPreview } from "../magicui/SparklePreview";

export const WebHeader = () => {
  return (
    <div className="relative text-white h-[60vh] pl-16 pt-28 flex flex-col gap-5 max-700:pl-10 max-550:pl-0 max-550:px-5">
      <SparklesPreview text="Web Development" maxWidth="w-[800px] max-800:w-[500px]" />
    </div>
  );
};
