import { SparklesPreview } from "../magicui/SparklePreview";

export const ContactHeader = () => {
  return (
    <div className="text-white h-[60vh] pl-16 pt-24 flex flex-col gap-5">
      <SparklesPreview text="Contact" maxWidth="w-[400px] max-800:w-[300px]" />
    </div>
  );
};
