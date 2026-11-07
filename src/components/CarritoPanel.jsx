  export default function CarritoPanel({ carrito, onQuitar, onVaciar }) {
  const total = carrito.reduce((suma, p) => suma + p.price, 0);

  return (
    <aside className="carrito">
      <h3>Carrito ({carrito.length})</h3>

      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {carrito.map((p) => (
            <li key={p.id}>
              <img src={p.thumbnail} alt={p.title} />
              <span>
                {p.title} - $ {p.price.toFixed(2)}
              </span>
              <button onClick={() => onQuitar(p.id)}>Quitar</button>
            </li>
          ))}
        </ul>
      )}

      <p className="total">Total: $ {total.toFixed(2)}</p>
      <button onClick={onVaciar} disabled={carrito.length === 0}>
        Vaciar carrito
      </button>
    </aside>
  );
}


// comment

