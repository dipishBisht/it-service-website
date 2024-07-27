import { HoverEffect } from "../ui/card-hover-effect";
import SparklesText from "../ui/sparkles-text";

export default function MissionAndValues() {
  return (
    <div className="px-20 py-20 mx-auto bg-white text-black max-800:px-10 max-550:px-5">
      <div>
        <div className="flex gap-2 items-end">
          <SparklesText sparklesCount={2} text="Our" />
          <SparklesText sparklesCount={2} text="Mission" isBig={true} />
        </div>
        <div className="flex gap-2 items-end">
          <SparklesText sparklesCount={2} text="and" />
          <SparklesText sparklesCount={2} text="Values" isBig={true} />
        </div>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
    {
      imageUrl:"https://cdn-icons-png.freepik.com/256/17027/17027101.png?ga=GA1.1.1836250673.1720700641&semt=ais_hybrid",
      title: "Integrity",
      description:
      "Integrity is the bedrock of our principles, guiding our actions with the full honesty and pure ethical standards. We strive to maintain the transparency and have trust in all our relationships and endeavors.",
    },
    {
      imageUrl:"https://cdn-icons-png.freepik.com/256/11670/11670385.png?ga=GA1.1.1836250673.1720700641&semt=ais_hybrid",
      title: "Excellence",
      description:
        "We are driven by a relentless pursuit of excellence, aiming to surpass the expectations, believe and deliver the highest quality in all we do. Our commitments ensures outstanding results for all our clients.",
    },
    {
      imageUrl:"https://cdn-icons-png.freepik.com/256/5371/5371017.png?ga=GA1.1.1836250673.1720700641&semt=ais_hybrid",
      title: "Collaboration",
      description:
        "Collaboration is main key to success, allowing us to harness diverse perspectives and expertise.Through teamwork and open communication, we create dynamic and great partnerships and innovative solutions.",
    },
    {
      imageUrl:"https://cdn-icons-png.freepik.com/256/1087/1087815.png?ga=GA1.1.1836250673.1720700641&semt=ais_hybrid",
      title: "Innovation",
      description:
        "Innovation powers our growth, enabling us to stay ahead in rapidly evolving landscape. By embracing new ideas and technologies, we deliver cutting-edge solutions that give our clients a competitive edge over others.",
    },
];
