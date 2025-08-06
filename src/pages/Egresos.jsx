export default function Egresos() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-sky-900 mb-4">Recibo de Egreso</h2>
      <form className="bg-white p-4 rounded shadow space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Caja</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Caja Chica" />
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
            <label className="font-semibold">Beneficiario</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Nombre del beneficiario" />
          </div>
          <div>
            <label className="font-semibold">Monto</label>
            <input type="number" className="border p-2 rounded w-full" placeholder="0.00" step="0.01" />
          </div>
          <div>
            <label className="font-semibold">Método de Pago</label>
            <select className="border p-2 rounded w-full">
              <option>Efectivo</option>
              <option>Cheque</option>
              <option>Transferencia</option>
              <option>Tarjeta</option>
              <option>Otros</option>
            </select>
          </div>
        </div>
        <div>
          <label className="font-semibold">Concepto / Descripción</label>
          <textarea className="border p-2 rounded w-full" placeholder="Detalle del egreso"></textarea>
        </div>
        <div className="text-right">
          <button className="bg-sky-900 text-white px-4 py-2 rounded">Guardar</button>
        </div>
      </form>
    </div>
  );
}
