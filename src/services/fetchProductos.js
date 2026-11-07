const URL = "https://dummyjson.com/products?limit=12";

export async function fetchProductos() {
  const respuesta = await fetch(URL);
  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al cargar los productos`);
  }
  const data = await respuesta.json();
  return data.products;
}
// comment