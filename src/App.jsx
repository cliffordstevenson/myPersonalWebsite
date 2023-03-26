import { useState } from 'react';
import Contact from './components/Contact';
import Main from './components/Main';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav';
import Work from './components/Work';
import Photo from './components/Photo';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className='bg-[#1f1f1f]'>
      <Sidenav/>
      <Main/>
      <Work />
      <Projects/>
      <Resume />
      <Photo/>
      <Contact/>
    </div>
  )
}

export default App
