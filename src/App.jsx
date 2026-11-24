
import { useState } from "react";

// Child component
function ProductCard({ name, price, image, addToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

// Parent component
function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      name: "Laptop",
      price: 50000,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
    },
    {
      name: "Headphones",
      price: 2000,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    },
    {
      name: "Smartphone",
      price: 15000,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
    },
    {
      name: "Smart Watch",
      price: 3000,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    }
  ];

  function addToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="app">
      <h1>Product Store</h1>
      <h2 className="cart">🛒 Cart Count: {cartCount}</h2>

      <div className="product-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
