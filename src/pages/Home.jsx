import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, Heart, Shield, Truck } from 'lucide-react';
import { products, categories, instagramFeed } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pre-loved</span> toys,
              <br />
              <span className="bg-gradient-to-r from-secondary to-pink-500 bg-clip-text text-transparent">endless</span> joy
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover curated, high-quality pre-loved kids toys that bring smiles 
              while caring for our planet. Affordable, sustainable, and full of love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:from-primary-dark hover:to-secondary-dark transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-secondary text-secondary px-8 py-3 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-secondary hover:to-pink-500 hover:text-white transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kids Corner Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Add subtle pink accent */}
          <div className="absolute left-0 top-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Kids Corner?
            </h2>
            <p className="text-lg text-gray-600">
              We believe every toy deserves a second chance to bring joy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Recycle className="w-8 h-8 text-secondary" />,
                title: 'Sustainable',
                description: 'Reduce waste by giving toys a second life'
              },
              {
                icon: <Heart className="w-8 h-8 text-pink-500" />,
                title: 'Curated with Love',
                description: 'Each toy is carefully selected for quality'
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: 'Safe & Clean',
                description: 'Thoroughly cleaned and safety-checked'
              },
              {
                icon: <Truck className="w-8 h-8 text-secondary" />,
                title: 'Fast Delivery',
                description: 'Quick and secure shipping across Pakistan'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect toy for your little one
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-secondary">{category.count} items</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Hand-picked favorites that kids love
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:from-primary-dark hover:to-secondary-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Follow Us on Instagram
            </h2>
            <p className="text-lg text-gray-600">
              See our toys in action with happy families
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramFeed.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="#"
             className="inline-flex items-center space-x-2 text-secondary hover:text-secondary-dark font-semibold"
            >
              <span>@kidscorner</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;