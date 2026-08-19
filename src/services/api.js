const API_URL = import.meta.env.VITE_API_URL;

export async function getIncidents() {
  const response = await fetch(`${API_URL}/incidents`);

  if (!response.ok) {
    throw new Error("Failed to fetch incidents");
  }

  return response.json();
}

export async function getDashboardStats() {
  const response = await fetch(`${API_URL}/dashboard`);

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard statistics");
  }

  return response.json();
}


export async function getSystemHealth() {
  const response = await fetch(`${API_URL}/system-health`);

  if (!response.ok) {
    throw new Error("Failed to fetch system health");
  }

  return response.json();
}