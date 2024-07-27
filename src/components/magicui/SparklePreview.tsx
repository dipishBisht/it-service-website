import { SparklesCore } from "../ui/sparkles";

export function SparklesPreview({
  text,
  maxWidth,
}: {
  text: string;
  maxWidth: string;
}) {
  return (
    <div className="h-[40rem] w-full bg-black flex justify-center items-center overflow-hidden rounded-md">
      <div className={`flex flex-col mx-auto ${maxWidth}`}>
        <h1 className={`text-7xl font-bold text-white text-center relative z-20 max-800:text-5xl`}>
          {text}
        </h1>
        <div className="h-20 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.1}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full flex"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_100px_at_top,transparent_20%,white)]" />
        </div>
      </div>
    </div>
  );
}
