import ProductCard from './ProductCard';
import productlist from './productList';

function ProductGrid() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {productlist.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;