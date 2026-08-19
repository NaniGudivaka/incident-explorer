// This component refers to the System Health part

import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  HelpCircle,
} from "lucide-react";

import "./styles/systemHealth.css";


function SystemHealth() {

  // System health data


  //This was sample data, once i am done UI part i will create data with my own 

  const healthData = [
    {
      label: "Healthy",
      value: 62,
      icon: CheckCircle,
      type: "healthy",
    },
    {
      label: "Warning",
      value: 18,
      icon: AlertTriangle,
      type: "warning",
    },
    {
      label: "Critical",
      value: 10,
      icon: XCircle,
      type: "critical",
    },
    {
      label: "Unknown",
      value: 6,
      icon: HelpCircle,
      type: "unknown",
    },
  ];

  const totalServices = healthData.reduce(
    (total, item) => total + item.value,
    0
  );


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