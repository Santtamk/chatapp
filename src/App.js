import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import SideNav from "./components/sidenav/SideNav";

function App() {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [pastConversationView, setPastConversationView] = useState(false);
  const [pastConversation, setPastConversation] = useState([]);

  const getFromLocalStorage = () => {
    const savedChats = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setPastConversation(savedChats);
    // console.log(pastConversation);
    setPastConversationView(true);
    // console.log(pastConversationView);
  };

  return (
    <div className="bg-text01-gradient min-h-screen ">
      <SideNav
        navBarOpen={navBarOpen}
        setNavBarOpen={setNavBarOpen}
        getFromLocalStorage={getFromLocalStorage}
      >
        <Main
          navBarOpen={navBarOpen}
          pastConversationView={pastConversationView}
          pastConversation={pastConversation}
        />
      </SideNav>
    </div>
  );
}

export default App;
