import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";


const SocialNetworkContainer = () => {
  return (
    <section id="socialNetworks">
    
        <a id="linkedin" href="https://www.linkedin.com/in/rodolpho-baltazar-47000b38/" target="_blank" className="socialBtn" >
          <FaLinkedinIn />
        </a>

        <a id="github" href="https://github.com/RBaltazarS" target="_blank" className="socialBtn" >
          <FaGithub />
        </a>

        <a id="instagram" href="https://www.instagram.com/baltazarbjj/" target="_blank" className="socialBtn" >
          <FaInstagram />
        </a>

    </section>
  );
};

export default SocialNetworkContainer;


//MUDAR AS CORES HOVER NOS ICONES DAS  REDES  SOCIAIS  