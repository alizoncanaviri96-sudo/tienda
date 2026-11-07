import { useState } from "react";
import { useProductos } from "./hooks/UseProductos";
import ProductoList from "./components/ProductoList";
import CarritoPanel from "./components/CarritoPanel";

export default function TiendaApp() {
  const { productos, cargando, error } = useProductos();
  const [carrito, setCarrito] = useState([]);

  const agregar = (producto) => {
    setCarrito((prev) =>
      prev.some((p) => p.id === producto.id) ? prev : [...prev, producto]
    );
  };

  const quitar = (id) => setCarrito((prev) => prev.filter((p) => p.id !== id));
  const vaciar = () => setCarrito([]);

  return (
    <>
      <h1>Mini Tienda</h1>
      <div className="layout">
        {cargando ? (
          <p className="mensaje">Cargando...</p>
        ) : error ? (
          <p className="mensaje error">Error: {error}</p>
        ) : (
          <ProductoList productos={productos} carrito={carrito} onAgregar={agregar} />
        )}
        <CarritoPanel carrito={carrito} onQuitar={quitar} onVaciar={vaciar} />
      </div>
    </>
  );
}











