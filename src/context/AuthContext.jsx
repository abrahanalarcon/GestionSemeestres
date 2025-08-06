import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = (username, password) => {
    if (username === "juan montilla" && password === "12345") {
      setLoading(true);
      setUsername(username);
      localStorage.setItem("username", username);

      setTimeout(() => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
        setLoading(false);
        navigate("/ingresos");
      }, 1000); // 1 segundo de spinner
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  const logout = () => {
    setLoading(true);

    setTimeout(() => {
    setIsAuthenticated(false);
    setUsername("");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    setLoading(false);
    navigate("/loginform", { replace: true });
    }, 500); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
