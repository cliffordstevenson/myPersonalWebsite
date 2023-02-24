import { useState } from 'react';
import Contact from './components/Contact';
import Main from './components/Main';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav';
import Work from './components/Work';
import Photo from './components/Photo';

function App() {
  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work />
      <Projects/>
      <Photo/>
      <Contact/>
    </div>
  )
}

export default App
