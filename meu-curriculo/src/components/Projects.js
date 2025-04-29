import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h2>Meus Projetos</h2>
      <p className="intro">
        Aqui estão alguns dos projetos que desenvolvi utilizando tecnologias como React, HTML, CSS e JavaScript. Você pode ver mais no meu GitHub.
      </p>

      <ul className="project-list">
        <li>
          <h4>📁 Portfólio Pessoal</h4>
          <p>Site institucional criado com React para apresentar meu currículo, habilidades e contatos.</p>
          <a href="https://github.com/seuusuario/portfolio" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        </li>
        <li>
          <h4>🔑 Login</h4>
          <p>Tela de login responsivo com html e css.</p>
          <a href="https://github.com/Ricek-27/Tela-de-Login" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        </li>
        <li>
          <h4>🕒 Relógio Digital</h4>
          <p>Relógio digital com Data/Dia da semana e um painel para mudar a cor do relógio.</p>
          <a href="https://github.com/Ricek-27/Relogio-" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        </li>
      </ul>

      <p className="github-link">
        🔗 Veja todos os projetos em: <a href="https://github.com/Ricek-27" target="_blank" rel="noopener noreferrer">https://github.com/Ricek-27</a>
      </p>
    </div>
  );
}

export default Projects;
