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

import ComingSoon from "./components/dashboard/common/ComingSoon";

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

          <Route
            path="/services"
            element={
              <ComingSoon
                title="Services Explorer"
                description="We're currently building the service monitoring and exploration experience. This section will provide service health, incident impact, and related dependency information."
              />
            }
          />

          <Route
            path="/dependencies"
            element={
              <ComingSoon
                title="Dependency Explorer"
                description="This section will provide an interactive view of service dependencies and help trace how incidents can propagate across connected services."
              />
            }
          />

          <Route
            path="/teams"
            element={
              <ComingSoon
                title="Teams"
                description="Team ownership and incident responsibility information will be available here."
              />
            }
          />

          <Route
            path="/deployments"
            element={
              <ComingSoon
                title="Deployments"
                description="Deployment history and its relationship with incidents will be available here."
              />
            }
          />

          <Route
            path="/databases"
            element={
              <ComingSoon
                title="Databases"
                description="Database health, usage, and service relationships will be explored here."
              />
            }
          />

          <Route
            path="/environments"
            element={
              <ComingSoon
                title="Environments"
                description="Monitor incidents and services across development, staging, and production environments."
              />
            }
          />

          <Route
            path="/reports"
            element={
              <ComingSoon
                title="Reports"
                description="Incident trends, service health metrics, and operational reports will be available here."
              />
            }
          />

        </Routes>

      </div>


    </BrowserRouter>
  );
}

export default App;