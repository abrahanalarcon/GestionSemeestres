import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function Navbar() {
    const { logout } = useAuth();

  return (
    <nav className="bg-sky-900 text-white p-4 flex items-center justify-between">
      <h1 className="text-lg font-bold">Gestión Financiera</h1>
      <ul className="flex gap-4">
        <li><Link to="/ingresos" className="hover:underline">Ingresos</Link></li>
        <li><Link to="/egresos" className="hover:underline">Egresos</Link></li>
        <li><Link to="/metodospago" className="hover:underline">Métodos de Pago</Link></li>
        <li><Link to="/bancos" className="hover:underline">Bancos</Link></li>
        <li><Link to="/tipos-contacto" className="hover:underline">Tipos de contacto</Link></li>
        
      </ul>

      <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
        Cerrar sesión
      </button>

    </nav>
  );
}
