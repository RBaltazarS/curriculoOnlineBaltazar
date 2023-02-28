//Styles.
import "./styles/components/app.sass"

//Components.
import MainContent from "../src/components/MainContent"
import Sidebar from "../src/components/Sidebar"


function App() {
  
  return (
    <div id="portfolio">
      <h1>Rodolpho Baltazar</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
