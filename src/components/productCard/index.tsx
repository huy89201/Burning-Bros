import "./styles.css";
import Product from "../../interface/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-description">{product.description}</p>
        <div className="card-details">
          <span className="card-price">${product.price}</span>
          <span className="card-discount">-{product.discountPercentage}%</span>
          <span className="card-rating">⭐ {product.rating}</span>
          <span className="card-stock">In stock: {product.stock}</span>
        </div>
        <div className="card-brands">
          {/* <span className="card-brand">luxury palace</span> */}
          <span className="card-category">#{product.brand}</span>
        </div>
      </div>
    </div>
  );
}
