import SparklesText from "../components/ui/sparkles-text";
import TechStack from "../components/Other Components/TechStack";
import Accordian2 from "../components/Other Components/Accordian2";
import Price from "../components/Other Components/Price";

const appStack = [
  {
    stack: "Frontend",
    stackFeatures: ["React Native", "Flutter", "SwiftUI", "Jetpack Compose"],
  },
  {
    stack: "Backend",
    stackFeatures: ["Node.js", "Django", "Ruby on Rails", "Firebase"],
  },
  {
    stack: "Database",
    stackFeatures: [
      "Firebase Realtime Database",
      "SQLite",
      "Realm",
      "Core Data",
    ],
  },
  {
    stack: "DevOps",
    stackFeatures: ["Fastlane", "CircleCI", "Jenkins", "GitHub Actions"],
  },
];

const AppDev = () => {
  return (
    <>
      <div className="bg-white text-black py-20 px-16 max-800:px-10 max-550:px-5">
        <div className="flex justify-between items-center gap-3 max-1200:flex-col-reverse max-1200:items-start">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 items-center">
                <SparklesText sparklesCount={2} text="App" />
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
              Our app development tech stack ensures robust and scalable mobile
              applications. We leverage frameworks like React Native and
              Flutter, alongside native languages such as Swift for iOS and
              Kotlin for Android, to build high-performance apps. By integrating
              cutting-edge technologies and tools, we create seamless user
              experiences that meet modern standards.
            </p>
          </div>
          <div className="rounded-full h-[450px] w-[450px] max-1300:w-[350px] max-1300:h-[350px] max-800:w-[300px] max-800:h-[300px] max-550:w-[250px] max-550:h-[250px]">
            <img
              className="rounded-full w-full h-full"
              src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065783.jpg?ga=GA1.1.1836250673.1720700641&semt=ais_user"
              alt=""
            />
          </div>
        </div>
        <div className="mt-16">
          <TechStack myStack={appStack} stackName="Web" />
        </div>
      </div>
      <Accordian2 />
      <Price />
    </>
  );
};

export default AppDev;
