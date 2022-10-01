import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './style.css';

const Social = () => (
  <ul className="social-list">
    <li>
      <a className="social" href="http://www.github.com">
        <GoMarkGithub />
      </a>
    </li>
    <li>
      <a className="social" href="http://www.facebook.com">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a className="social" href="http://www.instagram.com">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a className="social" href="http://www.linkedin.com">
        <FaLinkedin />
      </a>
    </li>
  </ul>
);

export default Social;
