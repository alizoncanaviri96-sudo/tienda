import ProductoCard from "./ProductoCard";

export default function ProductoList({ productos, carrito, onAgregar }) {
  return (
    <section className="grid">
      {productos.map((p) => (
        <ProductoCard
          key={p.id}
          producto={p}
          enCarrito={carrito.some((item) => item.id === p.id)}
          onAgregar={onAgregar}
        />
      ))}
    </section>
  );
}

// comment

