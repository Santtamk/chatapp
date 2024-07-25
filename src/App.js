import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import SideNav from "./components/sidenav/SideNav";

function App() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <div className="bg-text01-gradient min-h-screen ">
      <SideNav navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen}>
        <Main navBarOpen={navBarOpen} />
      </SideNav>
    </div>
  );
}

export default App;
