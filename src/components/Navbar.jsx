import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { Menu, X } from "lucide-react"; // iconos hamburguesa

export default function Navbar() {
  const { logout, username } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-900 text-white px-4 py-3 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg font-bold">Gestión Financiera</h1>

        {/* Botón hamburguesa solo en móviles */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú horizontal (oculto en móviles) */}
        <ul className="hidden md:flex gap-4 items-center">
          <li><Link to="/ingresos" className="hover:underline">Ingresos</Link></li>
          <li><Link to="/egresos" className="hover:underline">Egresos</Link></li>
          <li><Link to="/metodospago" className="hover:underline">Métodos de Pago</Link></li>
          <li><Link to="/bancos" className="hover:underline">Bancos</Link></li>
          
          {/* Menú desplegable usuario */}
          <div className="relative group">
            <button className="bg-sky-700 px-3 py-1 rounded">
              {username || "Usuario"}
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition">
              <Link  className="block px-4 py-2 hover:bg-gray-100">Configuración</Link>
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </ul>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <ul className="flex flex-col gap-2 mt-3 md:hidden bg-sky-800 p-3 rounded-lg text-center">
          <li className="w-full"><Link to="/ingresos" onClick={() => setIsOpen(false)}  className="block w-full py-2 px-3 hover:bg-sky-700 rounded">Ingresos</Link></li>
          <li className="w-full"><Link to="/egresos" onClick={() => setIsOpen(false)} className="block w-full py-2 px-3 hover:bg-sky-700 rounded">Egresos</Link></li>
          <li className="w-full"><Link to="/metodospago" onClick={() => setIsOpen(false)} className="block w-full py-2 px-3 hover:bg-sky-700 rounded">Métodos de Pago</Link></li>
          <li className="w-full"><Link to="/bancos" onClick={() => setIsOpen(false)} className="block w-full py-2 px-3 hover:bg-sky-700 rounded">Bancos</Link></li>
          <li className="border-t border-sky-400 pt-2 w-full">
            <span className="block font-semibold">{username || "Usuario"}</span>
            <Link  className="block w-full py-2 px-3 hover:bg-sky-700 rounded text-sm mt-1" onClick={() => setIsOpen(false)}>Configuración</Link>
            <button onClick={logout} className="block w-full py-2 px-3 text-center hover:bg-red-500 rounded text-sm text-red-300 mt-1"
       >Cerrar sesión</button>
          </li>
        </ul>
      )}
    </nav>
  );
}
