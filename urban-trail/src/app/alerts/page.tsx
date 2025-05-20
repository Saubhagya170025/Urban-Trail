'use client';

import React from "react";

export const alertsCardData = {
  title: "Alerts",
  description: "Active alerts and notifications",
  content: "View real-time alerts about sanitary issues and complaints.",
  href: "/alerts"
};

export default function AlertsPage() {
  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>Alerts</h1>
      <p>This page will display alerts and notifications for the sanitary management system.</p>
      {/* Add your alert list or map markers here */}
    </div>
  );
}
