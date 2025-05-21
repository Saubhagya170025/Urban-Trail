'use client';

import React from "react";

export const workerCardData = {
  title: "Worker Attendance",
  description: "Daily attendance summary",
  content: "Track the attendance of sanitary workers across all zones.",
  href: "/attendance"
};

export default function WorkerAttendancePage() {
  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>Worker Attendance</h1>
      <p>This page will show detailed attendance records of workers.</p>
      {/* You can add your attendance list or charts here */}
    </div>
  );
}
