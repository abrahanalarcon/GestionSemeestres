import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Ingresos from "./pages/Ingresos";
import Egresos from "./pages/Egresos";
import Contactos from "./pages/Contactos";
import MetodosPago from "./pages/MetodosPago";
import Bancos from "./pages/Bancos";




export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/ingresos" element={<Ingresos />} />
        <Route path="/egresos" element={<Egresos />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/metodos" element={<MetodosPago />} />
        <Route path="/bancos" element={<Bancos />} />
        
        
        
        <Route path="*" element={<Ingresos />} /> {/* Página por defecto */}
      </Routes>
    </div>
  );
}

