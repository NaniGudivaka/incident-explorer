//Skeleton loading will work if we render


import { useState } from "react";
import "./App.css";

import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";
import Dashboard from "./components/dashboard/Dashboard";
// import Skeleton from "./components/dashboard/common/Skeleton";

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>

      {/* <div
        style={{
          position: "fixed",
          top: "100px",
          left: "300px",
          zIndex: 9999,
        }}
      >
        <Skeleton />
      </div> */}

      <div className="app">

        <SideBar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <Header
          onMenuClick={() => setSidebarOpen(true)}
        />

        <Dashboard />

      </div>

    </>
  );
}

export default App;