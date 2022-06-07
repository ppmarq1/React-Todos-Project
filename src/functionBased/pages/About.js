/* eslint-disable */

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = (props) => (
  <div className="navContainer">
    <ul className="navLinks">
      <li>
        <Link to="/about/app">About App</Link>
      </li>
      <li>
        <Link to="/about/author">About Author</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);
export default About;
