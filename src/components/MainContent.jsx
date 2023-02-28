//Styles.
import "../styles/components/maincontent.sass"

//Components.
import AboutContainer from "./AboutContainer"
import ProjectsContainer from "./ProjectsContainer"
import TechnologiesContainer from "./TechnologiesContainer"

const MainContent = () => {
  return (
    <main id="mainContent">
      <AboutContainer/>
      <TechnologiesContainer/>
      <ProjectsContainer/>
    </main>
  )
}

export default MainContent