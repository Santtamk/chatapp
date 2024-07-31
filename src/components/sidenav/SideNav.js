const SideNav = ({
  navBarOpen,
  setNavBarOpen,
  children,
  getFromLocalStorage,
}) => {
  return (
    <div className="flex flex-start">
      <aside className="lg:flex lg:flex-col lg:w-1/5 lg:bg-secondary lg:min-h-screen ">
        <div className="lg:hidden">
          <div
            onClick={() => setNavBarOpen(!navBarOpen)}
            className={`cursor-pointer text-3xl font-bold text-primary ${
              navBarOpen ? "hidden" : ""
            }`}
          >
            &equiv;
          </div>
        </div>

        <div
          className={`fixed inset-0 bg-secondary z-50 transition-transform transform ${
            navBarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:relative lg:inset-auto lg:transform-none`}
        >
          <div className="flex flex-col gap-5 p-2 lg:gap-4 lg:flex">
            <div className="flex justify-center items-center gap-4">
              <img
                src="./botAi.png"
                alt="botAi"
                className="h-8 w-8 rounded-xl shadow-inner drop-shadow-lg"
              />
              <span className="text-xl	font-normal">New Chat</span>
              <img src="./edit.png" alt="edit-icon" className="h-6	w-6	" />
            </div>
            <button
              onClick={() => setNavBarOpen(false)}
              className="text-3xl font-bold text-primary cursor-pointer lg:hidden"
            >
              &times;
            </button>
          </div>
          <div
            className="bg-white h-screen text-center p-4"
            onClick={getFromLocalStorage}
          >
            <div className="bg-secondary rounded">Past Conversations</div>
          </div>
        </div>
      </aside>
      <div className="lg:w-4/5 w-full">
        <div
          className={`font-bold text-3xl text-primary ${
            navBarOpen ? "hidden" : ""
          } lg:block pl-4 h-auto fixed`}
        >
          Bot AI
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default SideNav;
