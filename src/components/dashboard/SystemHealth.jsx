// This component refers to the System Health part

import { useState, useEffect } from "react";

import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  HelpCircle,
} from "lucide-react";

import { getSystemHealth } from "../../services/api";

import "./styles/systemHealth.css";


function SystemHealth() {

  const [healthStats, setHealthStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    async function fetchSystemHealth() {

      try {

        const response = await getSystemHealth();

        console.log("SYSTEM HEALTH RESPONSE:", response);

        setHealthStats(response.data);

      } catch (err) {

        console.error(err);
        setError("Failed to load system health");

      } finally {

        setLoading(false);

      }
    }

    fetchSystemHealth();

  }, []);


  if (loading) {
    return <div>Loading system health...</div>;
  }


  if (error) {
    return <div>{error}</div>;
  }


  const healthData = [
    {
      label: "Healthy",
      value: healthStats?.healthy ?? 0,
      icon: CheckCircle,
      type: "healthy",
    },
    {
      label: "Warning",
      value: healthStats?.warning ?? 0,
      icon: AlertTriangle,
      type: "warning",
    },
    {
      label: "Critical",
      value: healthStats?.critical ?? 0,
      icon: XCircle,
      type: "critical",
    },
    {
      label: "Unknown",
      value: healthStats?.unknown ?? 0,
      icon: HelpCircle,
      type: "unknown",
    },
  ];


  const totalServices = healthStats?.totalServices ?? 0;


  return (
    <div className="system-health-content">

      {/* Health chart */}

      <div className="health-chart">

        <div className="health-chart-center">
          <strong>{totalServices}</strong>
          <span>Services</span>
        </div>

      </div>


      {/* Health status list */}

      <div className="health-status-list">

        {healthData.map((item) => {

          const Icon = item.icon;

          return (
            <div
              className="health-status-item"
              key={item.label}
            >

              <div className={`health-status-icon ${item.type}`}>
                <Icon size={14} />
              </div>

              <span className="health-status-label">
                {item.label}
              </span>

              <strong className="health-status-value">
                {item.value}
              </strong>

            </div>
          );

        })}

      </div>

    </div>
  );
}


export default SystemHealth;