import Footer from "./components/Footer/Footer";
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
  const handleSubmitForm = (values) => {
    console.log("Form values:", values);
  };
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
      <Reviews />
      <Photography />
      <LetsGetStarted handleSubmitForm={handleSubmitForm} />
      <Footer />
    </>
  );
}

export default App;
