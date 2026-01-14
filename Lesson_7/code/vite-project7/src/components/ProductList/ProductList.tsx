import { Suspense, useEffect, useState } from "react";
import type Product from "../../types/Product";
import { ProductCard } from "../ProductCard/ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  //! Варіант із React 18
  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const arr = await res.json();
    setProducts(arr);
  }

  useEffect(() => {
    // Добавляєм щоб не було помилки цей рядок
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  return (
    <div>
      {/* //!  Suspense - чекає поки йде загрузка */}
      <Suspense fallback={<p>Loading...</p>}>
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Suspense>
    </div>
  );
}

// наш сервер - https://fakeapi.platzi.com/en/rest/products/
