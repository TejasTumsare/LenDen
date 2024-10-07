import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({
    cars: [],
    bikes: [],
    mobiles: [],
    electronics: [],
  });

  const addProduct = (category, newProduct) => {
    setProducts((prevProducts) => ({
      ...prevProducts,
      [category]: [...prevProducts[category], newProduct],
    }));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
