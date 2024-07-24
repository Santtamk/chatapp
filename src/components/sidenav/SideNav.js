import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const SideNav = ({ navBarOpen, setNavBarOpen }) => {
  
  // const [openNav, setOpenNav] = useState(navBarOpen)
  // console.log('open nav', openNav)
  return (
    // <aside className="flex">
    //   <div className="lg:hidden">
    //     <div
    //       onClick={() => setNavBarOpen(!navBarOpen)}
    //       className={`cursor-pointer text-3xl	font-bold text-primary ${navBarOpen  ? "hidden" : ""}`}
    //     >
    //       &equiv;
    //     </div>
    //   </div>

    //   <div className={`lg:w-1/5 ${navBarOpen ? "block" : "hidden"} lg:block overflow-hidden`}>
    //       <div className={`flex gap-5 w-screen py-2	px-2${navBarOpen  ? "" : "hidden"} bg-secondary justify-evenly items-center lg:w-full lg:gap-4 lg:flex `}>
    //         <div>
    //           <img
    //             src="./botAi.png"
    //             alt="botAi"
    //             className="h-8 w-8 rounded-xl shadow-2xl"
    //           />
    //         </div>
    //         <div className="flex justify-center items-center">New Chat</div>
    //         <div className="flex justify-center items-center">
    //           <FaRegEdit />
    //         </div>
    //         <button
    //           onClick={() => setNavBarOpen(false)}
    //           className="text-3xl font-bold text-primary cursor-pointer lg:hidden "
    //         >
    //           &times;
    //         </button>
    //       </div>
    //       <div className={`bg-whites h-screen text-center bg-white`}>
    //         <div className="bg-secondary m-2">
    //           Past Conversations  
    //         </div>
    //       </div>
    //   </div>
    // </aside>
    <div class="bg-gray-100">

    <div class="h-screen flex overflow-hidden bg-gray-200">
        {/* <!-- Sidebar --> */}
        <div class="absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300"
            id="sidebar">
            {/* <!-- Your Sidebar Content --> */}
            <div class="p-4">
                <h1 class="text-2xl font-semibold">Sidebar</h1>
                <ul class="mt-4">
                    <li class="mb-2"><a href="#" class="block hover:text-indigo-400">Home</a></li>
                    <li class="mb-2"><a href="#" class="block hover:text-indigo-400">About</a></li>
                    <li class="mb-2"><a href="#" class="block hover:text-indigo-400">Services</a></li>
                    <li class="mb-2"><a href="#" class="block hover:text-indigo-400">Contact</a></li>
                </ul>
            </div>
        </div>

        {/* <!-- Content --> */}
        <div class="flex-1 flex flex-col overflow-hidden">
            {/* <!-- Navbar --> */}
            <div class="bg-white shadow">
                <div class="container mx-auto">
                    <div class="flex justify-between items-center py-4 px-2">
                        <h1 class="text-xl font-semibold">Animated Drawer</h1>

                        <button class="text-gray-500 hover:text-gray-600" id="open-sidebar">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    </div>
                </div>
            </div>
            {/* <!-- Content Body --> */}
            <div class="flex-1 overflow-auto p-4">
                <h1 class="text-2xl font-semibold">Welcome to our website</h1>
                <p>... Content goes here ...</p>
            </div>
        </div>
    </div>

    {/* <script>
        const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar');
    
    openSidebarButton.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('-translate-x-full');
    });

    // Close the sidebar when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
            sidebar.classList.add('-translate-x-full');
        }
    });
    </script> */}

</div>
  );
};

export default SideNav;
