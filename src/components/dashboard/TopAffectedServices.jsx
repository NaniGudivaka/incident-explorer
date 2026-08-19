// This component refers to the Top Affected Services part

import {
  ShieldAlert,
  LockKeyhole,
  UserRound,
  Bell,
  ShoppingCart,
} from "lucide-react";

import "./styles/affectedServices.css";


function TopAffectedServices() {

  // Service data
  // This structure can later be replaced with API response data

  const services = [
    {
      name: "Payment Service",
      incidents: 5,
      type: "critical",
      icon: ShieldAlert,
    },
    {
      name: "Auth Service",
      incidents: 3,
      type: "critical",
      icon: LockKeyhole,
    },
    {
      name: "User Service",
      incidents: 2,
      type: "warning",
      icon: UserRound,
    },
    {
      name: "Notification Service",
      incidents: 2,
      type: "warning",
      icon: Bell,
    },
    {
      name: "Checkout Service",
      incidents: 2,
      type: "warning",
      icon: ShoppingCart,
    },
  ];


  return (
    <div className="top-affected-services">

      {services.map((service) => {

        const Icon = service.icon;

        return (
          <div
            className="affected-service-item"
            key={service.name}
          >

            {/* Service icon */}

            <div className={`affected-service-icon ${service.type}`}>
              <Icon size={16} strokeWidth={1.8} />
            </div>


            {/* Service information */}

            <div className="affected-service-info">

              <span className="affected-service-name">
                {service.name}
              </span>

              <span className="affected-service-count">
                {service.incidents} incidents
              </span>

            </div>

          </div>
        );
      })}

    </div>
  );
}

export default TopAffectedServices;