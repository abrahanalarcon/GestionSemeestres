import { Routes, Route } from "react-router-dom";

//paginas
import Navbar from "./components/Navbar";
import LoginForm from "./pages/loginform";
import Ingresos from "./pages/Ingresos";
import Egresos from "./pages/Egresos";
import Contactos from "./pages/Contactos";
import MetodosPago from "./pages/MetodosPago";
import Bancos from "./pages/Bancos";
import TiposContacto from "./pages/Contactos";



//authentication context
import ProtectedRoute from "./context/ProtectedRoute";
import { useAuth } from "./context/useAuth";

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/loginform" element={<LoginForm />} />

        <Route path="/ingresos" element={  <ProtectedRoute>   <Ingresos /> </ProtectedRoute> } />

        <Route  path="/egresos"  element={ <ProtectedRoute>   <Egresos /> </ProtectedRoute> } />

        <Route  path="/contactos" element={  <ProtectedRoute>  <Contactos /> </ProtectedRoute>  } />

        <Route  path="/metodospago"  element={ <ProtectedRoute> <MetodosPago /> </ProtectedRoute> }  />

        <Route  path="/bancos"  element={ <ProtectedRoute>  <Bancos />  </ProtectedRoute>  }   />
        
        <Route  path="/tipos-contacto" element={ <ProtectedRoute> <TiposContacto />   </ProtectedRoute>  }  />
        

        {/* Ruta catch-all para redirigir a login si no coincide */}
        <Route path="*" element={<LoginForm />} />
      </Routes>
    </>
  );
}
