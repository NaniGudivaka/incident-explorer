# Incident Explorer

Incident Explorer is a full-stack incident management and dependency exploration application designed to help engineering teams monitor incidents, understand affected services, and explore relationships between incidents, services, dependencies, and other infrastructure components.

The project uses a graph-based data model with CognoDB and a Neo4j-compatible JavaScript driver to represent relationships between incidents and the services/infrastructure affected by them.

---

## 1. Overview / Use Case

In a modern application, a single incident can affect multiple services and dependencies.

For example:

Incident
    ↓
Payment Service
    ↓
Database
    ↓
Authentication Service

Traditional relational data can store these entities, but understanding multi-level relationships can require multiple joins and complex queries.

Incident Explorer uses a graph database approach so that these relationships can be represented and traversed naturally.

The application provides a centralized interface for:

- Monitoring incidents
- Viewing incident severity and status
- Understanding affected services
- Monitoring overall system health
- Exploring relationships between infrastructure components
- Providing a foundation for dependency and impact analysis

---

## 2. Why a Graph Database?

Incident management involves highly connected data.

An incident may be related to:

- A service
- Multiple services
- Dependencies
- Databases
- Teams
- Deployments
- Environments

A graph database allows these relationships to be represented directly as nodes and relationships.

For example:

Incident → AFFECTS → Service
Service → DEPENDS_ON → Database
Service → OWNED_BY → Team
Deployment → DEPLOYED_TO → Environment

This makes graph traversal and relationship-based queries easier to implement.

Incident Explorer uses CognoDB with a Neo4j-compatible approach through the Neo4j JavaScript driver and Cypher queries.

---

## 3. Key Features

### Currently Implemented

- Dashboard overview
- Open incident statistics
- Critical incident statistics
- Affected service statistics
- Recent incidents
- System health visualization
- Incident listing
- Incident severity display
- Incident status display
- Search/filter UI for incidents
- React Router based page navigation
- Node.js/Express REST API
- CognoDB database connectivity
- Graph-oriented backend structure
- Responsive dashboard layout

### Planned / In Progress

- Incident detail page
- Service explorer
- Service dependency visualization
- Team ownership information
- Deployment information
- Environment information
- Interactive dependency graph
- Multi-hop incident impact analysis
- Advanced incident filtering
- Graph-based incident investigation

---

## 4. Technology Stack

### Frontend

- React.js
- JavaScript
- React Router
- Lucide React
- CSS
- Vite

### Backend

- Node.js
- Express.js
- REST APIs
- CORS
- dotenv

### Database

- CognoDB
- Neo4j JavaScript Driver
- Cypher

### Development Tools

- Git
- GitHub
- Vercel
- Render
- VS Code

---

## 5. Graph Data Model

The application is designed around connected entities.

### Nodes

Potential graph nodes include:

- Incident
- Service
- Database
- Team
- Deployment
- Environment

### Relationships

Examples:

```text
Incident ──AFFECTS──────> Service

Service ──DEPENDS_ON────> Service

Service ──USES──────────> Database

Service ──OWNED_BY──────> Team

Deployment ──DEPLOYED_TO──> Environment

Incident ──RELATED_TO───> Incident



## Project Status

> **Current Status: In Progress**

The core foundation of Incident Explorer has been implemented, including the React dashboard, incident management interface, system health visualization, frontend routing, Node.js/Express API structure, and CognoDB database connectivity.

The project is currently being extended with the remaining graph-based functionality.

### Implemented

- React dashboard and responsive UI
- Dashboard statistics
- Recent Incidents section
- System Health section
- Incident listing page
- Incident filtering/search UI
- React Router navigation
- Node.js/Express backend
- Dashboard, incidents, and system-health API routes
- CognoDB connectivity using the Neo4j JavaScript driver
- Initial graph-oriented application architecture
- Frontend and backend deployment setup

### Remaining / In Progress

- Complete service explorer
- Complete dependency explorer
- Interactive service dependency graph
- Incident detail view
- Full incident-to-service-to-dependency traversal
- Complete graph-based impact analysis
- Additional graph entities such as teams, deployments, and environments
- Final integration and production testing
- Additional seed data and Cypher queries
- Final UI polishing and loading/error states

The current implementation provides the foundation for these features, with the remaining work focused primarily on completing the graph-based incident investigation workflow.