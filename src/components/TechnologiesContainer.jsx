import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiBootstrap,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.JS", icon: <DiNodejsSmall /> },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologiesContainer">
      <h2>Tecnologias</h2>
      <div className="technologiesGrid">
        {technologies.map((tech) => (
          <div className="technologyCard" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technologyInfo">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;