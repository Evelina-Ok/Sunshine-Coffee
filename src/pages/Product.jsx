import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //to access URL parameters
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export function Product() {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const {cardData, addToCart} = useContext(CartContext);

  useEffect(() => {
    fetch(`http://localhost:8081/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <section key={product.name}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.price} DKK</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(id)}>Add to cart</button>
    </section>
  );
}
