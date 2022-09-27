import '../styles/components/projectscontainer.sass'

const projects = [
  {
    id: 510831072,
    name: "Board Task",
    url: "https://boardtask.netlify.app/",
    language: "NextJS",
    descricao:"Projeto que controla uma board de tasks com integração com firebase e sistema de pagamentos paypal"
  },
  {
    id: 516116825,
    name: "Conversor de moedas",
    url: "https://github.com/ViniciusCosta126/Conversor-de-moedas",
    language: "JavaScript",
    descricao:"Projeto que realiza a conversão de algumas das principais moedas"
  },
  {
    id: 516110140,
    name: "MovieLib",
    url: "https://github.com/ViniciusCosta126/MovieLib",
    language: "JavaScript",
    descricao:"Projeto que exibe conteudo sobre filmes, realizando consumo de api e usando react-router-dom"
  },
  {
    id: 516114927,
    name: "TodoListReact",
    url: "https://github.com/ViniciusCosta126/TodoListReact",
    language: "JavaScript",
    descricao:"Um simples projeto de uma lista de tarefas utilizando react-hooks"
  },
];

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((project) => {
          return (
            <div key={project.id} className="project-card">
              <h4>
                <a href={project.url}>{project.name}</a>
              </h4>
              <p>Linguagem: {project.language}</p>
              <p>{project.descricao}</p>
            </div>
          );
        })}
      </div>
      <a href="https://github.com/ViniciusCosta126" className="btn">
        Ver todos os Projetos
      </a>
    </section>
  );
};

export default ProjectsContainer;
