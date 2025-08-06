import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { useState } from "react";

export default function Navbar() {
  const { username, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-900 text-white p-4 flex items-center justify-between ">
      {/* Logo */}
      <h1 className="text-lg font-bold tracking-wide">Gestión Financiera</h1>

      {/* Links */}
      <ul className="flex gap-6 text-sm font-medium">
        <li><Link to="/ingresos" className="hover:text-sky-300 transition">Ingresos</Link></li>
        <li><Link to="/egresos" className="hover:text-sky-300 transition">Egresos</Link></li>
        <li><Link to="/metodospago" className="hover:text-sky-300 transition">Métodos de Pago</Link></li>
        <li><Link to="/bancos" className="hover:text-sky-300 transition">Bancos</Link></li>
        <li><Link to="/tipos-contacto" className="hover:text-sky-300 transition">Tipos de contacto</Link></li>
      </ul>

      {/* Dropdown usuario */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-sky-800 hover:bg-sky-700 px-4 py-2 rounded-lg transition"
        >
          <span>{username || "Usuario"}</span>
          <svg
            className={`w-4 h-4 transform transition ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Link
              to="/configuracion"
              className="block text-center px-4 py-2 hover:bg-sky-100 transition"
            >
              Configuración
            </Link>
            <button
              onClick={logout}
              className="block w-full text-center px-4 py-2 hover:bg-red-100 transition text-red-600"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
