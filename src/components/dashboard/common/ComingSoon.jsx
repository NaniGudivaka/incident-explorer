import { Clock3, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./styles/comingSoon.css";

function ComingSoon({ title, description }) {
  const navigate = useNavigate();

  return (
    <main className="coming-soon-page">

      <div className="coming-soon-card">

        <div className="coming-soon-icon">
          <Clock3 size={32} />
        </div>

        <span className="coming-soon-badge">
          Coming Soon
        </span>

        <h1>{title}</h1>

        <p>{description}</p>

        <button
          className="coming-soon-back"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={17} />
          Back to Dashboard
        </button>

      </div>

    </main>
  );
}

export default ComingSoon;