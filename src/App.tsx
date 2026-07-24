import { useState } from "react";

import MainLayout from "./app/layout/MainLayout";
import Login from "./pages/Login";

function App() {
  const [userName, setUserName] = useState<string | null>(
    () => localStorage.getItem("userName"),
  );

  function handleLogin(
    authenticatedUserName: string,
  ): void {
    localStorage.setItem(
      "userName",
      authenticatedUserName,
    );

    setUserName(authenticatedUserName);
  }

  function handleLogout(): void {
    localStorage.removeItem("userName");
    setUserName(null);
  }

  if (!userName) {
    return (
      <Login
        onLogin={handleLogin}
      />
    );
  }

  return (
    <MainLayout
      userName={userName}
      onLogout={handleLogout}
    />
  );
}

export default App;