# Incident Explorer

A full-stack incident monitoring and dependency exploration application built as part of the Wexa AI CognoDB assessment.

Incident Explorer is designed to provide a centralized view of incidents, system health, affected services, and service dependencies. The application uses React for the frontend, Node.js/Express for the backend, and CognoDB as the graph database with the Neo4j JavaScript driver.

---

## Overview

Modern applications consist of multiple interconnected services, databases, and dependencies. When an incident occurs, understanding the affected service and its surrounding dependencies can be difficult when the information is scattered across different systems.

Incident Explorer is designed to solve this problem by bringing incident information and service relationships into a single interface.

The application allows users to:

- Monitor incidents
- View incident severity and status
- View recent incidents
- Monitor overall system health
- Identify affected services
- Explore service dependencies
- Navigate between different operational sections
- Eventually trace relationships between incidents, services, dependencies, and databases using graph data

---

# Tech Stack

## Frontend

- React.js
- JavaScript
- Vite
- React Router DOM
- Lucide React
- CSS

## Backend

- Node.js
- Express.js
- Neo4j JavaScript Driver
- CognoDB
- Cypher

## Deployment

- Frontend: Vercel
- Backend: Render

## Database

- CognoDB
- Neo4j JavaScript Driver
- Cypher-compatible graph queries

---

# Application Architecture

```text
                    ┌─────────────────────┐
                    │    React Frontend   │
                    │                     │
                    │  Dashboard          │
                    │  Incidents          │
                    │  System Health      │
                    │  Other UI Sections  │
                    └──────────┬──────────┘
                               │
                               │ REST API
                               ▼
                    ┌─────────────────────┐
                    │   Node.js / Express │
                    │                     │
                    │ /api/dashboard      │
                    │ /api/incidents      │
                    │ /api/system-health │
                    └──────────┬──────────┘
                               │
                               │ Neo4j Driver
                               ▼
                    ┌─────────────────────┐
                    │      CognoDB        │
                    │                     │
                    │ Incidents           │
                    │ Services            │
                    │ Dependencies        │
                    │ Databases           │
                    └─────────────────────┘