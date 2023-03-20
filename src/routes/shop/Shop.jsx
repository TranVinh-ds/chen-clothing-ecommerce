// import React, { useContext } from 'react';
// import { CategoriesContext } from '../../contexts/CategoriesContext';
// import CategoryPreview from '../../components/category-preview/CategoryPreview';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';
import './Shop.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

// const { categoriesMap } = useContext(CategoriesContext);
// {/* <* className="shop-container">
// {Object.keys(categoriesMap).map((title) => {
//   const products = categoriesMap[title];
//   return (
//     <CategoryPreview key={title} title={title} products={products} />
//   );
// })}*/}

// {Object.keys(categoriesMap).map((title) => (
//   <Fragment key={title}>
//     <h2>{title}</h2>
//     <div className="products-container">
//       {categoriesMap[title].map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   </Fragment>
// ))}
