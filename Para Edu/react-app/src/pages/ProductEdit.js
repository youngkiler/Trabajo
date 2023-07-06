import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Products.css";
import ProductBar from "../components/ProductBar";

function ProductDetails() {
  const { id } = useParams();
  const navegate = useNavigate();

  const [products, setProducts] = useState(null);
   

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/product`);
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  

  if (!products) {
    return <div>Loading...</div>;
  }



  const handleDelete = () => {
    // Aquí podríamos hacer una llamada a una API para eliminar el producto
    // En este ejemplo, simplemente redirigimos a la página de productos
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (confirmDelete) {
      axios.delete(`${process.env.REACT_APP_API_URL}/product/${id}`)
        .then(() => {
          // Realizar cualquier acción necesaria después de eliminar el producto, como redirigir a la página de listado de productos
          navegate("/products");
        })
        .catch(error => {
          console.error(error);
          alert("Error eliminando producto");
        });
    }
   
  };

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    /* <div className="page-container">
      <h1>{product.name}</h1>
     <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <div className="buttons">
        
        <Link to={`/product/${id}/edit`}>
          <button>Editar</button>
        </Link>
        <button onClick={handleDelete}>Eliminar</button>
      </div>
    </div>*/

<>

<ProductBar />
<div className="container p-2 mx-auto sm:p-4">
	<h2 className="mb-4 text-2xl font-semibold  leading-tight   flex-row rounded-lg border  text-black text-center lg:text-2xl">Productos</h2>
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			<colgroup>
				<col className="w-5"/>
				<col/>
				<col/>
				<col/>
				<col/>
				<col/>
				<col className="w-5"/>
			</colgroup>
			<thead>
				<tr className="dark:bg-gray-500"> 
					<th className="px-20 py-3 text-white">Nombre Producto</th>
					<th className="px-20 py-3 text-white">Stock</th>
					<th className="px-20 py-3 text-white">Precio</th>
					<th className="px-16 py-3 text-white">Categoria</th>
					<th className="px-8 text-white">Fecha Actualizacion</th>
          <Link to={`/product/${id}/edit`}>
            <th className="p-3">
              <span className="sr-only">Editar</span>
            </th>
          </Link> 
				</tr>
			</thead>
			<tbody className="products-grid border-b dark:bg-gray-900 dark:border-gray-700">
      {products?.map((product) => (
				<tr> 
          <td key={product._id}>
						<p>ID</p>
					</td>
					<td /*onChange={(e) => setName(e.target.value)} para tener un modelo si puedo usar o no*/ className="px-3 py-2">
						<p className="product-name">{product.name}</p>
					</td>
					<td className="px-3 py-2">
						<p className="product-stock">{product.stock}</p> 
					</td>
					<td className="px-3 py-2">
						<p className="product-price">{product.price}</p>
					</td>
					<td className="px-3 py-2">
						<p className="product-categoria">{product.category}</p>
					</td>
					<td className="px-3 py-2">
						<p className="product-fechaact">{product.fechaact}</p> 
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr> 
        ))}
			</tbody>
		</table>
	</div>
</div>
</>

  );
}

export default ProductDetails;
