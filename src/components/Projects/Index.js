import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProfileImg, Highlight, Info } from './styles';
import SubTitle from '../SubTitle/Index';
import SubTitleH3 from '../SubTitleH3/Index';
import './style.css';

const Projects = ({ img, subTitle, subTitleH3, date, info, endereco }) => (
  <div>
    <BrowserRouter>
      <ProfileImg src={img} alt="projeto" />
      <SubTitle texto={subTitle} />
      <SubTitleH3 subTitleH3={subTitleH3} />
      <Info>
        <Highlight> {date}</Highlight>
      </Info>
      <p>{info}</p>
      <a className="project" href={endereco}>
        {endereco}
      </a>
      <p>.</p>
    </BrowserRouter>
  </div>
);

export default Projects;
