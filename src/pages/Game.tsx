import SparklesText from "../components/ui/sparkles-text";
import TechStack from "../components/Other Components/TechStack";
import Accordian2 from "../components/Other Components/Accordian2";
import Price from "../components/Other Components/Price";

const appStack = [
  {
    stack: "Game Engines",
    stackFeatures: ["Unity", "Unreal Engine", "Godot", "CryEngine"],
  },
  {
    stack: "Programming Languages",
    stackFeatures: ["C#", "C++", "Python", "JavaScript"],
  },
  {
    stack: "Graphics",
    stackFeatures: ["Blender", "Maya", "3ds Max", "Substance Painter"],
  },
  {
    stack: "Audio",
    stackFeatures: ["FMOD", "Wwise", "Audacity", "Pro Tools"],
  },
];

const Game = () => {
  return (
    <>
      <div className="bg-white text-black py-20 px-16 max-800:px-10 max-550:px-5">
        <div className="flex justify-between items-center gap-3 max-1200:flex-col-reverse max-1200:items-start">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 items-center">
                <SparklesText sparklesCount={2} text="Game" />
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
              Our game development tech stack is designed to bring immersive and
              interactive gaming experiences to life. We utilize powerful
              engines like Unity and Unreal Engine, combined with languages such
              as C# and C++, to create stunning visuals and smooth gameplay. Our
              expertise in both 2D and 3D game development allows us to craft
              games that are visually appealing and technically sound.
            </p>
          </div>
          <div className="rounded-full h-[450px] w-[450px] max-1300:w-[350px] max-1300:h-[350px] max-800:w-[300px] max-800:h-[300px] max-550:w-[250px] max-550:h-[250px]">
            <img
              className="rounded-full w-full h-full object-cover"
              src="/src/assets/gameStack.png"
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

export default Game;
