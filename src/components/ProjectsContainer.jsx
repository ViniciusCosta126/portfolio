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
    name: "MovieLib",
    url: "https://movielibs-vinicius.netlify.app/",
    language: "React",
    descricao:"Projeto que simula uma loja de venda de filmes, com a possibilidade de adicionar a lista de favoritos e carrinho"
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
