// This component refers to the Incident Heatmap part

import "./styles/heatMap.css";


function Heatmap() {

  // Incident heatmap data
  // Each row represents a day
  // Each value represents the number of incidents during that hour

  const heatmapData = [
    {
      day: "Mon",
      values: [1, 2, 0, 1, 3, 5, 2, 1, 0, 2, 4, 6],
    },
    {
      day: "Tue",
      values: [0, 1, 2, 3, 4, 2, 1, 0, 2, 3, 5, 4],
    },
    {
      day: "Wed",
      values: [2, 3, 1, 0, 2, 4, 6, 3, 2, 1, 3, 5],
    },
    {
      day: "Thu",
      values: [1, 0, 2, 4, 3, 2, 5, 6, 4, 2, 1, 3],
    },
    {
      day: "Fri",
      values: [3, 2, 4, 5, 6, 4, 3, 2, 4, 5, 3, 2],
    },
    {
      day: "Sat",
      values: [0, 1, 1, 0, 2, 1, 0, 2, 1, 0, 1, 2],
    },
    {
      day: "Sun",
      values: [1, 0, 2, 1, 0, 2, 1, 0, 1, 2, 1, 0],
    },
  ];


  // Convert incident count into a heatmap intensity

  const getIntensity = (value) => {

    if (value === 0) {
      return "level-0";
    }

    if (value <= 1) {
      return "level-1";
    }

    if (value <= 2) {
      return "level-2";
    }

    if (value <= 4) {
      return "level-3";
    }

    return "level-4";
  };


  return (
    <div className="incident-heatmap-content">

      {/* Heatmap */}

      <div className="heatmap-wrapper">

        {/* Time labels */}

        <div className="heatmap-time-labels">

          <span></span>

          <span>12 AM</span>
          <span>4 AM</span>
          <span>8 AM</span>
          <span>12 PM</span>
          <span>4 PM</span>
          <span>8 PM</span>

        </div>


        {/* Heatmap rows */}

        <div className="heatmap-grid">

          {heatmapData.map((row) => (

            <div
              className="heatmap-row"
              key={row.day}
            >

              <span className="heatmap-day">
                {row.day}
              </span>

              <div className="heatmap-cells">

                {row.values.map((value, index) => (

                  <div
                    className={`heatmap-cell ${getIntensity(value)}`}
                    key={`${row.day}-${index}`}
                    title={`${row.day}: ${value} incidents`}
                  >
                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* Heatmap Legend */}

      <div className="heatmap-legend">

        <span>Less</span>

        <span className="legend-cell level-0"></span>
        <span className="legend-cell level-1"></span>
        <span className="legend-cell level-2"></span>
        <span className="legend-cell level-3"></span>
        <span className="legend-cell level-4"></span>

        <span>More</span>

      </div>

    </div>
  );
}

export default Heatmap;