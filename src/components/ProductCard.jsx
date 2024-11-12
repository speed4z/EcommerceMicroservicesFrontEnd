import PropTypes from 'prop-types';


// Define propTypes for ProductCard
ProductCard.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
};


function ProductCard({ product }) {
  return (
    
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-auto border border-gray-200">
      {/* Product Image */}
      <div className="w-full h-64 bg-gray-100 overflow-hidden">
        <img
          src={product.imageURL}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

        {/* Product Type */}
        <p className="text-sm text-gray-500">{product.type}</p>

        {/* Product Price */}
        <p className="text-xl font-bold text-gray-800 mt-2">${product.price}</p>

        {/* Product Description */}
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>

        {/* Add to Cart Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}


export default ProductCard;