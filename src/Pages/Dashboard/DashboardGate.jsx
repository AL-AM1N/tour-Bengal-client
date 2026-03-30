import { useState } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";

function DashboardGate() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <Dashboard />
  ) : (
    <Login onSuccess={() => setIsLoggedIn(true)} />
  );
}

export default DashboardGate;
