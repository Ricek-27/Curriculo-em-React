import React from 'react';
import './Curriculum.css';
import profilePic from '../assets/PFP_CURRICULO.jpg'; 

function Curriculum() {
  return (
    <div className="curriculum">
      <div className="profile-header">
        <img src={profilePic} alt="Perfil" className="profile-pic" />
        <div className="profile-info">
          <h2>Erick Ferreira</h2>
          <p>Email: erick27ferreira@gmail.com</p>
          <p>Telefone: (81) 98374-0054</p>
        </div>
      </div>

      <h3>Resumo Profissional</h3>
      <p>Desenvolvedor Front-End com experiência em HTML, CSS e se aprofundando em React e JavaScript.</p>

      <h3>Experiência</h3>
      <ul>
        <li>Umana Brasil - Repositor de FLV (2023–2024)</li>
        <li>Empresa Y - Estagiário de TI (2024–Atualmente)</li>
      </ul>

      <h3>Educação</h3>
      <ul>
        <h4>Ensino Médio</h4>
        <li>Ensino Médio completo - Escola de Referência em Ensino Médio Ginásio Pernambucano (2020-2022)</li>
        <h4>Grau Superior</h4>
        <li>Bacharel em Analise e Desenvolvimento de Sistemas - FICR - Faculdade Católica Imaculada Conceição do Recife (2024–atualmente)</li>
      </ul>
    </div>
  );
}

export default Curriculum;
