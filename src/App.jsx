
import Layout from "./Layout";
import { Hero } from "./component/Hero";
import AboutMe from "./component/AboutMe";
import Education from "./component/Education";
import Competence from "./component/Competence";
import ExProject from "./component/ExProject";
import ArrowToTop from "./component/ArrowToTop";

function App() {

  return (
    <Layout className="static">
      <Hero/>
      <AboutMe/>
      <Education/>
      <Competence/>
      <ExProject/>
      <ArrowToTop/>
    </Layout>
  )
}

export default App
