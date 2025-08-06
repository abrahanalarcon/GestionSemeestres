export default function Contactos() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-sky-900 mb-4">Módulo de Contactos</h2>
      <form className="bg-white p-4 rounded shadow space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Nombre / Razón social</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Nombre completo o empresa" />
          </div>
          <div>
            <label className="font-semibold">Tipo</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Estudiante / Proveedor" />
          </div>
          <div>
            <label className="font-semibold">Documento (ID / RNC)</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Número de identificación" />
          </div>
          <div>
            <label className="font-semibold">Teléfono</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Teléfono o móvil" />
          </div>
          <div>
            <label className="font-semibold">Correo electrónico</label>
            <input type="email" className="border p-2 rounded w-full" placeholder="correo@ejemplo.com" />
          </div>
          <div>
            <label className="font-semibold">Dirección</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Dirección" />
          </div>
        </div>
        <div>
          <label className="font-semibold">Observaciones</label>
          <textarea className="border p-2 rounded w-full" placeholder="Notas adicionales"></textarea>
        </div>
        <div className="text-right">
          <button className="bg-sky-900 text-white px-4 py-2 rounded">Guardar</button>
        </div>
      </form>
    </div>
  );
}

