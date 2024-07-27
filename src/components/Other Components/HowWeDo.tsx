import researchImg from "../../assets/research.png";
import positioningImg from "../../assets/positioning.png";
import marketingImg from "../../assets/marketing.png";
import executionImg from "../../assets/execution.png";
import evaluationImg from "../../assets/evaluation.png";
import SparklesText from "../ui/sparkles-text";

const howWeDo = [
  {
    imgUrl: researchImg,
    heading: "Research",
    para: "This involves gathering data and insights to understand market needs, customer preferences, and industry trends. It includes methods like surveys, interviews, and data analysis to inform decision-making.",
  },
  {
    imgUrl: positioningImg,
    heading: "Positioning",
    para: "After research, positioning defines how your product or service is perceived in the market relative to competitors. It involves identifying unique selling propositions (USPs) and crafting a compelling value proposition.",
  },
  {
    imgUrl: marketingImg,
    heading: "Marketing",
    para: "This encompasses strategies and tactics to promote your product or service. It includes activities like digital marketing, content creation, social media campaigns, SEO, and traditional advertising to reach and engage your target audience.",
  },
  {
    imgUrl: executionImg,
    heading: "Execution",
    para: "Execution is the implementation phase where plans are put into action. It involves coordinating resources, teams, and timelines effectively to deliver products or services according to the established strategy and standards.",
  },
  {
    imgUrl: evaluationImg,
    heading: "Evaluation",
    para: "Post-execution, evaluation involves assessing performance and outcomes against predefined goals and metrics. It includes gathering feedback, analyzing results, and making data-driven decisions for continuous improvement and future planning.",
  },
];

interface SingleHowWeDoProps {
  side: "left" | "right";
  heading: string;
  para: string;
  url: string;
}

const SingleHowWeDo: React.FC<SingleHowWeDoProps> = ({
  side,
  heading,
  para,
  url,
}) => {
  return (
    <div
      className="w-fit flex flex-col gap-2"
      style={side === "right" ? { marginLeft: "auto" } : { textAlign: "right" }}
    >
      <img
        style={
          side === "right" ? { marginRight: "auto" } : { marginLeft: "auto" }
        }
        src={url}
        className="w-24 h-24"
        alt=""
      />
      <h1 className="text-2xl font-bold max-800:text-xl">
        {heading}
      </h1>
      <p className="max-w-[450px] text-sm text-[#333]">
        {para}
      </p>
    </div>
  );
};

const HowWeDo: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden bg-white text-black px-20 py-20 max-800:px-10 max-550:px-5">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <SparklesText text="How" sparklesCount={2} />
          <SparklesText text="We" sparklesCount={2} isBig={true} />
        </div>
        <div className="flex gap-2 items-center">
          <SparklesText text="Do" sparklesCount={2} />
          <SparklesText text="IT" sparklesCount={2} isBig={true} />
        </div>
      </div>
      <div className="flex relative flex-col gap-5 w-full">
        <div className="">
          <div className="bg-[#333] border-[1px] absolute h-full w-[2px] flex left-2/4 -translate-x-2/4 max-1100:hidden"></div>
          <div className="flex flex-col justify-around absolute left-2/4 -translate-x-2/4 w-fit h-full max-1100:hidden">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-400 relative h-7 w-7 rounded-full"
              >
                <div
                  data-aos="zoom-in"
                  className="w-7 h-7 bg-purple-700 absolute top-0 rounded-full z-10"
                ></div>
              </div>
            ))}
          </div>
        </div>
        {howWeDo.map(({ heading, para, imgUrl }, ind) => {
          return ind % 2 === 0 ? (
            <SingleHowWeDo
              key={ind}
              heading={heading}
              para={para}
              url={imgUrl}
              side="left"
            />
          ) : (
            <SingleHowWeDo
              key={ind}
              heading={heading}
              para={para}
              url={imgUrl}
              side="right"
            />
          );
        })}
      </div>
    </div>
  );
};

export default HowWeDo;
