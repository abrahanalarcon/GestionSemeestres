import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper";
//paginas
import Navbar from "./components/Navbar";
import LoginForm from "./pages/loginform";
import Ingresos from "./pages/Ingresos";
import Egresos from "./pages/Egresos";
import Contactos from "./pages/Contactos";
import MetodosPago from "./pages/MetodosPago";
import Bancos from "./pages/Bancos";
import TiposContacto from "./pages/Contactos";
import Spinner from "./components/Spinner";


//authentication context
import ProtectedRoute from "./context/ProtectedRoute";
import { useAuth } from "./context/useAuth";

export default function App() {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }
  
  return (
    <>
      {isAuthenticated && <Navbar />}
       <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/loginform" element={<LoginForm />} />

        <Route path="/ingresos" element={  <ProtectedRoute>  <PageWrapper><Ingresos /></PageWrapper> </ProtectedRoute> } />

        <Route  path="/egresos"  element={ <ProtectedRoute>  <PageWrapper><Egresos /></PageWrapper>  </ProtectedRoute> } />




        <Route  path="/contactos" element={  <ProtectedRoute>  <PageWrapper><Contactos /></PageWrapper> </ProtectedRoute>  } />

        <Route  path="/metodospago"  element={ <ProtectedRoute>  <PageWrapper><MetodosPago /></PageWrapper> </ProtectedRoute> }  />

        <Route  path="/bancos"  element={ <ProtectedRoute>  <PageWrapper><Bancos /></PageWrapper>  </ProtectedRoute>  }   />

        <Route  path="/tipos-contacto" element={ <ProtectedRoute> <PageWrapper><TiposContacto /></PageWrapper>   </ProtectedRoute>  }  />


        {/* Ruta catch-all para redirigir a login si no coincide */}
        <Route path="*" element={<LoginForm />} />
      </Routes>
      </AnimatePresence>
    </>
  );
}
