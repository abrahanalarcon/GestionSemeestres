export default function Ingresos() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-sky-900 mb-4">Recibo de Ingreso</h2>
      <form className="bg-white p-4 rounded shadow space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Caja</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Caja General" />
          </div>
          <div>
            <label className="font-semibold">Fecha</label>
            <input type="date" className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="font-semibold">Número de Recibo</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Auto-generado" />
          </div>
          <div>
            <label className="font-semibold">Contacto</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Nombre del pagador" />
          </div>
        </div>
        <div>
          <label className="font-semibold">Concepto / Descripción</label>
          <textarea className="border p-2 rounded w-full" placeholder="Detalle del ingreso"></textarea>
        </div>
        <div className="text-right">
          <button className="bg-sky-900 text-white px-4 py-2 rounded">Guardar</button>
        </div>
      </form>
    </div>
  );
}
