import { Suspense } from "react";
// import { Suspense, useEffect, useState } from "react";
import type Product from "../../types/Product";
import { ProductCard } from "../ProductCard/ProductCard";
import { useProduct } from "./useProduct";

export default function ProductList() {
  //! Кастомний хук
  const { products } = useProduct();

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
