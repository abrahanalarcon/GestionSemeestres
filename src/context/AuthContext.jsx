import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

// Componente proveedor del contexto de autenticación
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const navigate = useNavigate();

  // Función para iniciar sesión
  const login = (username, password) => {
    if (username === "juan montilla" && password === "12345") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/ingresos"); // Página inicial después del login
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/loginform", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


