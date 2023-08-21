import React from 'react';

const projects = [
  {
    title: 'Travel Query',
    image: 'has-background-tq',
    github: 'https://github.com/AntimatterNova/group-proj-1',
  },
  {
    title: 'Nerd Quiz',
    image: 'has-background-nq',
    github: 'https://github.com/AntimatterNova/NerdQuiz',
  },
  {
    title: 'DigiNote',
    image: 'has-background-dn',
    github: 'https://github.com/AntimatterNova/DigiNote',
  }
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="is-rounded has-background-secondary has-text-white m-1">Portfolio</h2>
      <div className="columns">
        {projects.map((project, index) => (
          <div key={index} className="column is-one-third">
            <div className={`card ${project.image} has-background-main`}>
              <div className="card-content">
                <div className="content">
                    <h3 className="title is-2 has-background-main is-rounded">{project.title}</h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub Link
                    </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
