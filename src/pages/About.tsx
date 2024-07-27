import { AnimatedPinDemo } from "../components/Other Components/AnimatedPinDemo";
import AboutText from "../components/Other Components/AboutText";
import MissionAndValues from "../components/Other Components/MissionAndValues";
import { SpotlightPreview } from "../components/magicui/SpotlightPreview";
import Counter from "../components/Other Components/Counter";


const About = () => {
  return (
    <>
      <MissionAndValues />
      <SpotlightPreview />
      <AnimatedPinDemo />
      <Counter/>
      <AboutText />
    </>
  );
};

export default About;
