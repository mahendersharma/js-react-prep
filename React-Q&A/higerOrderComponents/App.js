import React from 'react';
import './style.css';

import Wrapper from './wrapperHoc.jsx';
import Contact from './contact.js';
import About from './About.jsx';

const EnhanceComponents = Wrapper(About);
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Contact />
      <About />
      <EnhanceComponents />
    </div>
  );
}
