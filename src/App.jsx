//Skeleton loading will work if we render
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";
import Dashboard from "./components/dashboard/Dashboard";
// import Skeleton from "./components/dashboard/common/Skeleton";
import Incidents from "./pages/Incidents";

function App() {


  useEffect(() => {
    window.alert(
      "Incident Explorer – Development Preview\n\n" +
      "This application is currently under active development. " +
      "Some features are still being implemented and may not be fully functional yet.\n\n" +
      "The current version demonstrates the implemented UI, API integration, " +
      "and CognoDB-based architecture.\n\n" +
      "Thank you for exploring the project!"
    );
  }, []);



  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>


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

        <Routes>

          {/* <Dashboard /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/incidents" element={< Incidents />} />

        </Routes>

      </div>


    </BrowserRouter>
  );
}

export default App;