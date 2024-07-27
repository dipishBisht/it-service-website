import { Spotlight } from "../ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="w-full rounded-md py-36 flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col gap-3 p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-[800px] text-center mx-auto">
          Our Spotlight feature highlights key products, services, or stories in
          a visually compelling way, capturing audience attention and
          engagement. Stay ahead of the curve with Spotlight, making your brand
          memorable and driving interaction.
        </p>
      </div>
    </div>
  );
}
