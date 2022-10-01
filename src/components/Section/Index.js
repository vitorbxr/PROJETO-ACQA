import React from 'react';
import Card from '../Card/Index';
import { Info } from '../Card/styles';
import Projects from '../Projects/Index';
import Social from '../Social/Index';
import SubTitle from '../SubTitle/Index';
import Title from '../Title/Index';
import { SectionHeading } from '../Title/styles';
import { Sections } from './styles';

const Section = ({ profile }) => (
  <>
    <Sections id="about">
      <Title texto="Olá pessoal, sou o" />
      <SectionHeading>
        {profile.nome} {profile.sobrenome}
      </SectionHeading>
      <Info>
        {profile.cidade} - {profile.estado}
      </Info>
      <p>{profile.biografia}</p>
      <div id="contacts">
        <Title texto="Contatos" />
        <p>Email</p>
        <SubTitle texto={profile.email} />
        <p>whatsapp</p>
        <SubTitle texto={profile.contato} />
      </div>
    </Sections>
    <Sections id="experience">
      <Title texto="Experiência" />
      {profile.experiencia.map((val) => (
        <Card
          key={val.id}
          subTitle={val.cargo}
          subTitleH3={val.empresa}
          date={val.periodo}
          info={val.atividades}
        />
      ))}
    </Sections>
    <Sections id="skills">
      <Title texto="Habilidades" />
      <ul>
        <li>
          <p>Linguagens</p>
          <SubTitle texto={profile.linguagens} />
        </li>
        <li>
          <p>Banco de Dados</p>
          <SubTitle texto={profile.db} />
        </li>
        <li>
          <p>Idiomas</p>
          <SubTitle texto={profile.idiomas} />
        </li>
      </ul>
    </Sections>
    <Sections id="projects">
      <Title texto="Projetos" />
      {profile.projetos.map((val) => (
        <Projects
          key={val.id}
          img={val.imgp}
          subTitleH3={val.titulo}
          date={val.empresa}
          info={val.data}
          endereco={val.endereco}
        />
      ))}
    </Sections>
    <Sections id="social">
      <Title texto="Redes Sociais" />
      <Social />
    </Sections>
  </>
);

export default Section;
