import { useEffect, useState } from "react";

import { getIncidents } from "../services/api";

import "./styles/incidents.css";


function Incidents() {

  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    async function fetchIncidents() {

      try {

        const response = await getIncidents();

        console.log("INCIDENTS RESPONSE:", response);

        setIncidents(response.data);

      } catch (err) {

        console.error(err);

        setError("Failed to load incidents");

      } finally {

        setLoading(false);

      }
    }

    fetchIncidents();

  }, []);


  if (loading) {
    return (
      <main className="incidents-page">
        <div className="incidents-message">
          Loading incidents...
        </div>
      </main>
    );
  }


  if (error) {
    return (
      <main className="incidents-page">
        <div className="incidents-message">
          {error}
        </div>
      </main>
    );
  }


  return (
    <main className="incidents-page">

      {/* Header */}

      <div className="incidents-header">

        <div>
          <h1>Incidents</h1>

          <p>
            Monitor and investigate system incidents
          </p>
        </div>

      </div>


      {/* Filters */}

      <div className="incidents-filters">

        <input
          type="text"
          className="incident-search"
          placeholder="Search incidents..."
        />

        <select className="incident-filter">
          <option value="">All Severity</option>
          <option value="Critical">Critical</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select className="incident-filter">
          <option value="">All Status</option>
          <option value="Open">Open</option>
          <option value="Resolved">Resolved</option>
        </select>

      </div>


      {/* Incidents Table */}

      <div className="incidents-table-container">

        <table className="incidents-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Incident</th>
              <th>Service</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>


          <tbody>

            {incidents.map((incident) => (

              <tr key={incident.id}>

                <td>
                  <span className="incident-id">
                    {incident.id}
                  </span>
                </td>

                <td>
                  <span className="incident-name">
                    {incident.title}
                  </span>
                </td>

                <td>
                  {incident.service}
                </td>

                <td>
                  <span
                    className={`incident-badge ${incident.severity.toLowerCase()}`}
                  >
                    {incident.severity}
                  </span>
                </td>

                <td>
                  <span
                    className={`incident-status-badge ${
                      incident.status?.toLowerCase() || "open"
                    }`}
                  >
                    {incident.status || "Open"}
                  </span>
                </td>

                <td>
                  {incident.time}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}


export default Incidents;