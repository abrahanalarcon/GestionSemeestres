export default function Bancos() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-sky-900 mb-4">Módulo de Bancos</h2>
      <form className="bg-white p-4 rounded shadow space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Nombre del banco</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Banco Popular" />
          </div>
          <div>
            <label className="font-semibold">Número de cuenta</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="123456789" />
          </div>
          <div>
            <label className="font-semibold">Tipo de cuenta</label>
            <select className="border p-2 rounded w-full">
              <option>Corriente</option>
              <option>Ahorro</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Moneda</label>
            <select className="border p-2 rounded w-full">
              <option>DOP</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
        <div className="text-right">
          <button className="bg-sky-900 text-white px-4 py-2 rounded">Guardar</button>
        </div>
      </form>
    </div>
  );
}
