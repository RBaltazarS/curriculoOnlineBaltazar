import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="infoCard">
        <AiFillPhone id="phoneIcon" />
        <div>
          <h3>Telefone</h3>
          <a href="https://wa.me/5571992781219?text=Olá,%20vamos%20iniciar%20seu%20novo%20projeto!" target="_blank">(71)9.9278-1219</a>
        </div>
      </div>
      <div className="infoCard">
        <AiOutlineMail id="emailIcon" />
        <div>
          <h3>E-mail</h3>
          <a href= "mailto:rodolpho.baltazar@hotmail.com?" target="_blank">Rodolpho.Baltazar</a>
        </div>
      </div>
      <div className="infoCard">
        <AiFillEnvironment id="pinIcon" />
        <div>
          <h3>Localização</h3>
          <a>Salvador / BA</a>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;