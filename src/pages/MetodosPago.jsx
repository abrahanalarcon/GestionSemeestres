export default function MetodosPago() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-sky-900 mb-4">Métodos de Pago</h2>
      <form className="bg-white p-4 rounded shadow space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Nombre del método</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Ej. Efectivo, Tarjeta" />
          </div>
          <div>
            <label className="font-semibold">Tipo de método</label>
            <select className="border p-2 rounded w-full">
              <option>Efectivo</option>
              <option>Banco</option>
              <option>Tarjeta</option>
              <option>Otro</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Banco (si aplica)</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Nombre del banco" />
          </div>
          <div>
            <label className="font-semibold">Número de cuenta</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="N° de cuenta" />
          </div>
        </div>
        <div className="text-right">
          <button className="bg-sky-900 text-white px-4 py-2 rounded">Guardar</button>
        </div>
      </form>
    </div>
  );
}
