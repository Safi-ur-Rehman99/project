import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from './Toast';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  const { addToast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        condition: product.condition,
      }
    });
    
    addToast(`${product.name} added to cart!`, 'success');
  };

  const getConditionColor = (condition) => {
    switch (condition) {
      case 'Like New':
        return 'bg-green-100 text-green-800';
      case 'Pre-loved':
        return 'bg-blue-100 text-blue-800';
      case 'Good':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <button className="text-gray-400 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xl font-bold text-secondary">Rs. {product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">Rs. {product.originalPrice}</span>
            )}
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getConditionColor(product.condition)}`}>
              {product.condition}
            </span>
            <span className="text-sm text-gray-500">{product.ageRange}</span>
          </div>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        </div>
      </Link>
      
      <div className="px-4 pb-4">
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-md hover:from-primary-dark hover:to-secondary-dark transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;