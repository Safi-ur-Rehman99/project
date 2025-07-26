import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Star, Shield, Truck, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../components/Toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const { addToast } = useToast();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link
            to="/shop"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
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
    }
    
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/shop"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Shop</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                      selectedImageIndex === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-2xl font-bold text-primary">Rs. {product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">Rs. {product.originalPrice}</span>
                )}
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getConditionColor(product.condition)}`}>
                  {product.condition}
                </span>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  4.8 (24 reviews)
                </span>
                <span>•</span>
                <span>{product.category}</span>
                <span>•</span>
                <span>{product.ageRange}</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Age Range</h4>
                <p className="text-gray-600">{product.ageRange}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Material</h4>
                <p className="text-gray-600">{product.material}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Size</h4>
                <p className="text-gray-600">{product.size}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Condition</h4>
                <p className="text-gray-600">{product.condition}</p>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label htmlFor="quantity" className="font-medium text-gray-900">
                  Quantity:
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-primary"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-primary"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Save for Later</span>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Safety Checked</p>
                    <p className="text-xs text-gray-600">Inspected for safety</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Free Delivery</p>
                    <p className="text-xs text-gray-600">On orders over Rs. 1000</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Easy Returns</p>
                    <p className="text-xs text-gray-600">7-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;