"use client";
import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
      {mounted && <UserList />}
    </div>
  );
}
