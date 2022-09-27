import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiPython,
  DiGithubBadge,
  DiPhp,
} from "react-icons/di";
import {TbBrandNextjs} from 'react-icons/tb'
import { SiTypescript,SiStyledcomponents } from "react-icons/si";

import "../styles/components/tecnologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    habilidade:
      "linear-gradient(90deg, rgba(250,82,82,1) 0%, rgba(221,36,118,1) 100%)",
    descricao:
      "Realizo a utilização das melhores praticas do html5 usando de tags semanticas para criação de layout",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    habilidade:
      "linear-gradient(90deg, rgba(250,82,82,1) 0%, rgba(221,36,118,1) 100%)",
    descricao:
      "Criação de CSS utilizando das melhores tecnicas para reutilização de codigo pra usar o minimo de css e criar o maximo possivel",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    habilidade:
      "linear-gradient(90deg, rgba(250,82,82,1) 0%, rgba(221,36,118,1) 100%)",
    descricao:
      "Realizo a criação de codigos javascript da forma mais limpa possivel e sempre que der reutilizando codigo",
  },
  {
    id: "git",
    name: "Git",
    icon: <DiGithubBadge />,
    habilidade:
      "linear-gradient(90deg, rgba(250,82,82,1) 0%, rgba(221,36,118,1) 100%)",
    descricao:
      "Conhecimento em Git para o versionamento de codigo e mantendo um historico de alterações",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    habilidade:
      "linear-gradient(90deg, rgba(250,82,82,1) 50%, rgba(128,128,128,1) 50%)",
    descricao:
      "Conhecimento de NodeJS, para criação de servidores HTTP, assim criando apis Rest",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    habilidade:
      "linear-gradient(90deg, rgba(250,82,82,1) 75%, rgba(128,128,128,1) 75%)",
    descricao:
      "Conhecimento em ReactJS, criando e reutilizando componentes, conhecimento em react Hooks,ContextApi,Redux,styled-components",
  },
  {
    id: "next",
    name: "NextJs",
    icon: <TbBrandNextjs />,
    habilidade:
      "linear-gradient(90deg, rgba(250,82,82,1) 50%, rgba(128,128,128,1) 50%)",
    descricao:
      "Criação de sites utilizando NextJs com as melhores praticas e site perfomaticos voltados para SEO"
  },
  {
    id:"TypeScript",
    name:"TypeScript",
    icon:<SiTypescript/>,
    habilidade:
      "linear-gradient(90deg, rgba(250,82,82,1) 50%, rgba(128,128,128,1) 50%)",
    descricao:"Conhecimento intermediario em TypeScript, para criação de components em React",
  },
  {
    id:"styledComponent",
    name:"StyledComponent",
    icon:<SiStyledcomponents/>,
    habilidade:
      "linear-gradient(90deg, rgba(250,82,82,1) 50%, rgba(128,128,128,1) 50%)",
    descricao:"Conhecimento em realizara lib para criação de componentes personalizados e responsivos"
  },
  {
    id: "python",
    name: "Python",
    icon: <DiPython />,
    habilidade:
      "linear-gradient(90deg, rgba(250,82,82,1) 75%, rgba(128,128,128,1) 75%)",
    descricao:
      "Conhecimento para criação de scripts de automação para agilizar o trabalho, e tambem conhecimento para criação de APis utilizando Flask",
  },
  {
    id: "php",
    name: "PHP",
    icon: <DiPhp />,
    habilidade:
      "linear-gradient(90deg, rgba(250,82,82,1) 30%, rgba(128,128,128,1) 30%)",
    descricao:
      "Conhecimento intermediario em php, para manutenção de sites e blogs em wordpress",
  },
];

const TecnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => {
          return (
            <div className="technology-card" id={tech.id} key={tech.id}>
              <div className="flip">
                <div className="front-card">
                  {tech.icon}
                  <div className="technology-info">
                    <h3>{tech.name}</h3>
                    <p>{tech.descricao}</p>
                    <p className="warning">* Passe o mouse para ver o nivel de habilidade</p>
                  </div>
                </div>
                <div className="back-card" id="back">
                  <p>Conhecimento da linguagem:</p>
                  <span
                    style={{
                      height: "20px",
                      width: "80%",
                      background: `${tech.habilidade}`,
                      display: "block",
                      borderRadius: "10px",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TecnologiesContainer;
