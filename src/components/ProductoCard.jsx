export default function ProductoCard({ producto, enCarrito, onAgregar }) {
  return (
    <article className={`card ${enCarrito ? "en-carrito" : ""}`}>
      <img src={producto.thumbnail} alt={producto.title} />
      <h4>{producto.title}</h4>
      <p className="categoria">{producto.category}</p>
      <p className="precio">$ {producto.price.toFixed(2)}</p>
      <button onClick={() => onAgregar(producto)} disabled={enCarrito}>
        {enCarrito ? "En el carrito" : "Agregar"}
      </button>
    </article>
  );
}


// comment