import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-sky-900 text-white p-4 flex items-center justify-between">
      <h1 className="text-lg font-bold">Gestión Financiera</h1>
      <ul className="flex gap-4">
        <li><Link to="/ingresos" className="hover:underline">Ingresos</Link></li>
        <li><Link to="/egresos" className="hover:underline">Egresos</Link></li>
        <li><Link to="/contactos" className="hover:underline">Contactos</Link></li>
        <li><Link to="/metodos" className="hover:underline">Métodos de Pago</Link></li>
        <li><Link to="/bancos" className="hover:underline">Bancos</Link></li>
        <li><Link to="/cheques" className="hover:underline">Cheques</Link></li>
        <li><Link to="/tipos-contacto" className="hover:underline">Tipos de contacto</Link></li>
        <li><Link to="/reportes" className="hover:underline">Reportes</Link></li>
      </ul>
    </nav>
  );
}
