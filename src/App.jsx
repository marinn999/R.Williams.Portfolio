import Dribbble from "./components/Dribbble/Dribbble";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Instagram from "./components/Instagram/Instagram";
import LetsGetStarted from "./components/LetsGetStarted/LetsGetStarted";
import Philosophy from "./components/Philosophy/Philosophy";
import Photography from "./components/Photography/Photography";
import Projects from "./components/Projects/Projects";
import Reviews from "./components/Reviews/Reviews";
import Skillset from "./components/Skillset/Skillset";
import SkillsetIcons from "./components/SkillsetIcons/SkillsetIcons";
import { Work } from "./components/Work/Work";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Work />
      <Philosophy />
      <Skillset />
      <SkillsetIcons />
      <Projects />
      <Instagram />
      <Dribbble />
      <Reviews />
      <Photography />
      <LetsGetStarted />
    </>
  );
}

export default App;
