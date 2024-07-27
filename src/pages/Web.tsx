import TechStack from "../components/Other Components/TechStack";
import SparklesText from "../components/ui/sparkles-text";
import Accordian2 from "../components/Other Components/Accordian2";
import Price from "../components/Other Components/Price";

const webStack = [
  {
    stack: "Frontend",
    stackFeatures: ["React", "Angular", "Vue", "Svelte"],
  },
  {
    stack: "Backend",
    stackFeatures: ["Node.js", "Express", "Django", "Flask"],
  },
  {
    stack: "Database",
    stackFeatures: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
  },
  {
    stack: "DevOps",
    stackFeatures: ["Docker", "Kubernetes", "AWS", "Azure"],
  },
];

const Web = () => {
  return (
    <>
      <div className="bg-white text-black py-20 px-16 max-800:px-10 max-550:px-5">
        <div className="flex justify-between items-center gap-3 max-1200:flex-col-reverse max-1200:items-start">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 items-center">
                <SparklesText sparklesCount={2} text="Web" />
                <SparklesText
                  sparklesCount={2}
                  text="Development"
                  isBig={true}
                />
              </div>
              <div className="flex gap-2 items-center">
                <SparklesText sparklesCount={2} text="Tech" />
                <SparklesText sparklesCount={2} text="Stack" isBig={true} />
              </div>
            </div>
            <p className="max-w-[700px] leading-[30px] max-550:text-sm">
              Our web development tech stack is built to create dynamic,
              responsive, and robust web applications. We leverage cutting-edge
              technologies like React, Node.js, and MongoDB to ensure high
              performance and scalability. Our team is proficient in both
              front-end and back-end development, providing a seamless and
              engaging user experience.
            </p>
          </div>
          <div className="rounded-full h-[450px] w-[450px] max-1300:w-[350px] max-1300:h-[350px] max-800:w-[300px] max-800:h-[300px] max-550:w-[250px] max-550:h-[250px]">
            <img
              className="rounded-full w-full h-full"
              src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?ga=GA1.1.1836250673.1720700641&semt=ais_user"
              alt=""
            />
          </div>
        </div>
        <div className="mt-16">
          <TechStack myStack={webStack} stackName="Web" />
        </div>
      </div>
      <Accordian2 />
      <Price />
    </>
  );
};

export default Web;
