
import { useState } from 'react';
import './App.css';
import Main from './components/main/Main';
import SideNav from './components/sidenav/SideNav';

function App() {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
      <div className='bg-text01-gradient flex'>
        <SideNav navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} className="lg:w-1/5	"/>
        <Main navBarOpen={navBarOpen} className="lg:w-4/5"/>
      </div>
      
  );
}

export default App;
