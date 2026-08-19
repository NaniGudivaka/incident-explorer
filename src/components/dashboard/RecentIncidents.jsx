// This component refers to the Recent Incidents part
import { useState, useEffect } from "react";
import {
  AlertCircle,
  CircleAlert,
  CircleCheck,
} from "lucide-react";

import { getIncidents } from "../../services/api";

import "./styles/recentIncidents.css";


function RecentIncidents() {

  // Incident data

  // const incidents = [
  //   {
  //     id: "INC-142",
  //     title: "Database connection failure",
  //     service: "Payment Service",
  //     time: "10 min ago",
  //     severity: "Critical",
  //     icon: AlertCircle,
  //   },
  //   {
  //     id: "INC-141",
  //     title: "High latency in auth service",
  //     service: "Auth Service",
  //     time: "25 min ago",
  //     severity: "High",
  //     icon: CircleAlert,
  //   },
  //   {
  //     id: "INC-140",
  //     title: "Error rate spike in checkout",
  //     service: "Checkout Service",
  //     time: "1 hr ago",
  //     severity: "High",
  //     icon: CircleAlert,
  //   },
  //   {
  //     id: "INC-139",
  //     title: "Cache miss rate high",
  //     service: "User Service",
  //     time: "3 hr ago",
  //     severity: "Medium",
  //     icon: CircleAlert,
  //   },
  //   {
  //     id: "INC-138",
  //     title: "Email service slow",
  //     service: "Notification Service",
  //     time: "5 hr ago",
  //     severity: "Low",
  //     icon: CircleCheck,
  //   },
  // ];


   const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    async function fetchIncidents() {

      try {

        const data = await getIncidents();

        setIncidents(data.data.slice(0, 4));

      } catch (error) {

        console.error(error);
        setError("Failed to load incidents");

      } finally {

        setLoading(false);

      }
    }

    fetchIncidents();

  }, []);


  if (loading) {
    return <div>Loading incidents...</div>;
  }


  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div className="recent-incidents-content">

      {incidents.map((incident) => {

        let Icon = CircleAlert;

        if(incident.severity === 'Critical'){
          Icon = AlertCircle;
        }
        if(incident.severity === 'Low'){
          Icon = CircleCheck;
        }

        return (
          <div
            className="incident-item"
            key={incident.id}
          >

            {/* Incident severity icon */}

            <div className={`incident-status ${incident.severity.toLowerCase()}`}>
              <Icon size={16} />
            </div>


            {/* Incident information */}

            <div className="incident-info">

              <div className="incident-title-row">

                <span className="incident-id">
                  {incident.id}
                </span>

                <span className="incident-title">
                  {incident.title}
                </span>

              </div>

              <span className="incident-service">
                {incident.service}
              </span>

            </div>


            {/* Incident time */}

            <span className="incident-time">
              {incident.time}
            </span>


            {/* Incident severity */}

            <span
              className={`incident-severity ${incident.severity.toLowerCase()}`}
            >
              {incident.severity}
            </span>

          </div>
        );
      })}

    </div>
  );
}

export default RecentIncidents;