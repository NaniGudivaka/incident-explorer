

import {
  AlertTriangle,
  ShieldAlert,
  Box,
  CheckCircle,
  Clock,
  CalendarDays,
} from "lucide-react";

import "./styles/dashboard.css";
import RecentIncidents from "./RecentIncidents";
import SystemHealth from "./SystemHealth";
import TopAffectedServices from "./TopAffectedServices";

function Dashboard() {
  const stats = [
    {
      title: "Open Incidents",
      value: "12",
      change: "2",
      text: "from last 7 days",
      icon: AlertTriangle,
      type: "danger",
    },
    {
      title: "Critical Incidents",
      value: "4",
      change: "1",
      text: "from last 7 days",
      icon: ShieldAlert,
      type: "danger",
    },
    {
      title: "Affected Services",
      value: "28",
      change: "5",
      text: "from last 7 days",
      icon: Box,
      type: "warning",
    },
    {
      title: "Resolved Incidents",
      value: "36",
      change: "8",
      text: "from last 7 days",
      icon: CheckCircle,
      type: "success",
    },
    {
      title: "MTTR",
      value: "2h 35m",
      change: "15m",
      text: "from last 7 days",
      icon: Clock,
      type: "info",
    },
  ];

  return (
    <main className="dashboard">

      {/* Dashboard Header */}

      <div className="dashboard-header">

        <div>
          <h1>Dashboard</h1>

          <p>
            Overview of system health and recent activity
          </p>
        </div>

        <button className="date-filter">
          <CalendarDays size={17} />

          <span>May 11 – May 18, 2025</span>

          <span className="date-arrow">⌄</span>
        </button>

      </div>


      {/* Statistics */}

      <section className="stats-grid">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              className={`stat-card ${stat.type}`}
              key={stat.title}
            >

              <div className="stat-content">

                <span className="stat-title">
                  {stat.title}
                </span>

                <strong className="stat-value">
                  {stat.value}
                </strong>

                <div className="stat-change">

                  <span className="change-arrow">
                    {stat.type === "success" || stat.type === "info"
                      ? "↓"
                      : "↑"}
                  </span>

                  <span>
                    {stat.change}
                  </span>

                  <span className="change-text">
                    {stat.text}
                  </span>

                </div>

              </div>


              <div className="stat-icon">
                <Icon size={22} />
              </div>

            </div>
          );
        })}

      </section>


      {/* Dashboard Content */}

      <section className="dashboard-grid">

        <div className="dashboard-panel recent-incidents">
          <div className="panel-header">
            <h2>Recent Incidents</h2>
            
            <button>View all</button>
          </div>

          <div className="panel-placeholder">
            < RecentIncidents />
          </div>
        </div>


        <div className="dashboard-panel system-health">
          <div className="panel-header">
            <h2>System Health</h2>
            <button>View all services</button>
          </div>

          <div className="panel-placeholder">
            <SystemHealth />
          </div>
        </div>


        <div className="dashboard-panel affected-services">
          <div className="panel-header">
            <h2>Top Affected Services</h2>
            <button>View all</button>
          </div>

          <div className="panel-placeholder">
            <TopAffectedServices />
          </div>
        </div>


        <div className="dashboard-panel heatmap">
          <div className="panel-header">
            <h2>Incident Heatmap</h2>
          </div>

          <div className="panel-placeholder">
            Incident heatmap will come here...
          </div>
        </div>


        <div className="dashboard-panel dependency-graph">
          <div className="panel-header">
            <h2>Service Dependency Graph</h2>
            <button>View full graph</button>
          </div>

          <div className="panel-placeholder">
            Neo4j dependency graph will come here...
          </div>
        </div>

      </section>

    </main>
  );
}

export default Dashboard;