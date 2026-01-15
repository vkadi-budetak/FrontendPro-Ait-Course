//! Кастомний хук
import { useState, useEffect } from "react";
import type Product from "../../types/Product";

export function useProduct() {
  const [products, setProducts] = useState<Product[]>([]);

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

  return { products };
}
