// This component refers to the Service Dependency Graph part

import {
  Monitor,
  Cloud,
  CreditCard,
  Lock,
  Bell,
  Mail,
  User,
  Database,
  FileText,
} from "lucide-react";

import "./styles/serviceDependency.css";


function ServiceDependency() {

  // Service nodes
  // This data can later come from the backend API

  const services = [
    {
      id: "web-app",
      name: "Web App",
      icon: Monitor,
      status: "healthy",
      position: "web-app",
    },
    {
      id: "api-gateway",
      name: "API Gateway",
      icon: Cloud,
      status: "healthy",
      position: "api-gateway",
    },
    {
      id: "payment",
      name: "Payment Service",
      icon: CreditCard,
      status: "critical",
      position: "payment",
    },
    {
      id: "auth",
      name: "Auth Service",
      icon: Lock,
      status: "critical",
      position: "auth",
    },
    {
      id: "notification",
      name: "Notification Service",
      icon: Bell,
      status: "warning",
      position: "notification",
    },
    {
      id: "email",
      name: "Email Service",
      icon: Mail,
      status: "healthy",
      position: "email",
    },
    {
      id: "user",
      name: "User Service",
      icon: User,
      status: "healthy",
      position: "user",
    },
    {
      id: "cache",
      name: "Cache Service",
      icon: Database,
      status: "warning",
      position: "cache",
    },
    {
      id: "logging",
      name: "Logging Service",
      icon: FileText,
      status: "healthy",
      position: "logging",
    },
  ];


  // Service relationships
  // Later these relationships will come from Neo4j

  const relationships = [
    {
      source: "web-app",
      target: "payment",
    },
    {
      source: "web-app",
      target: "api-gateway",
    },
    {
      source: "api-gateway",
      target: "payment",
    },
    {
      source: "payment",
      target: "auth",
    },
    {
      source: "payment",
      target: "user",
    },
    {
      source: "payment",
      target: "notification",
    },
    {
      source: "auth",
      target: "email",
    },
    {
      source: "auth",
      target: "logging",
    },
    {
      source: "auth",
      target: "cache",
    },
    {
      source: "notification",
      target: "payment",
    },
  ];


  return (
    <div className="service-dependency-content">

      {/* This part refers to Graph Area */}

      <div className="dependency-graph">

        {/* This part refers to Graph Connections */}

        <div className="dependency-connections">

          {relationships.map((relationship, index) => (

            <div
              key={`${relationship.source}-${relationship.target}-${index}`}
              className={`dependency-line line-${index}`}
            >
              <span className="dependency-arrow"></span>
            </div>

          ))}

        </div>


        {/* This part refers to Service Nodes */}

        {services.map((service) => {

          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className={`service-node ${service.position} ${service.status}`}
            >

              <div className="service-node-icon">
                <Icon size={18} strokeWidth={1.8} />
              </div>

              <div className="service-node-info">
                <span>{service.name}</span>
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default ServiceDependency;