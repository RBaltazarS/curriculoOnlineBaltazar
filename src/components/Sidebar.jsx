//Imagem Perfil.
import Avatar from "../img/profile-pic4.png"

//Styles.
import "../styles/components/sidebar.sass"

//Components.
import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Foto Baltazar" />
      <p className="title">Frontend Development</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">Download Cirrículo</a>
    </aside>
  )
}

export default Sidebar