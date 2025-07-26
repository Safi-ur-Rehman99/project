import React from 'react';
import { Heart, Users, Leaf, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">Kids Corner</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe every toy deserves a second chance to bring joy, and every family 
              deserves access to quality toys without breaking the bank.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Kids Corner, we're passionate about creating a sustainable future for our children 
                while making quality toys accessible to every family in Pakistan. We carefully curate pre-loved 
                toys, ensuring they meet our high standards for safety, quality, and fun.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Every toy in our collection has been thoroughly cleaned, inspected, and tested to 
                ensure it's ready for its next adventure. We believe that giving toys a second life 
                not only helps the environment but also brings unique character and stories to playtime.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-gray-600">Made with love</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Eco-friendly</span>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Happy family playing with toys"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8 text-green-500" />,
                title: 'Sustainability',
                description: 'Reducing waste by giving toys a second life and promoting circular economy principles.'
              },
              {
                icon: <Heart className="w-8 h-8 text-red-500" />,
                title: 'Quality',
                description: 'Every toy is carefully inspected and cleaned to ensure it meets our high standards.'
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: 'Community',
                description: 'Building a community of families who care about sustainability and quality play.'
              },
              {
                icon: <Award className="w-8 h-8 text-yellow-500" />,
                title: 'Affordability',
                description: 'Making quality toys accessible to families of all backgrounds and budgets.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Kids Corner was born from a simple observation: children outgrow toys faster than 
              they can wear them out. As parents ourselves, we noticed boxes of barely-used toys 
              gathering dust in closets while other families struggled to afford new ones.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We decided to create a bridge between these two worlds. By carefully curating 
              pre-loved toys and making them available at accessible prices, we're not just 
              running a business – we're building a movement towards more sustainable and 
              inclusive play in Pakistan.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
              <p className="text-xl font-medium text-gray-900 mb-4">
                "Every toy has a story, and we're here to help it continue."
              </p>
              <p className="text-gray-600">- The Kids Corner Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-xl">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25,000+</div>
              <div className="text-xl">Toys Rehomed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1 Year</div>
              <div className="text-xl">Building Community</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;