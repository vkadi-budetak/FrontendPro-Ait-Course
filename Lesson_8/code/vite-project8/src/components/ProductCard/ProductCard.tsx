import type { FC } from "react";
import type Product from "../../types/Product";
import { Link } from "react-router-dom";

export const ProductCard: FC<Product> = ({ id, title, images, price }) => {
  return (
    <div>
      <h3>
        <Link to={`/products/${id}`}>{title}</Link>
      </h3>
      <img src={images[0]} alt={title} />
      <p>{price}</p>
    </div>
  );
};
