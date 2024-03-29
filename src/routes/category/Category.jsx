import React from 'react';
import { useContext, useState, useEffect } from 'react';
import ProductCard from '../../components/product-card/ProductCard';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { useParams } from 'react-router-dom';
import { CategoryContainer, CategoryTitle } from './CategoryStyles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
