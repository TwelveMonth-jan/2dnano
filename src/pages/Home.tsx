import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Recycle, TrendingUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Replace these URLs with your actual image URLs
  const carouselImages = [
    "/2dnano_image01.jpg",
    "/2dnano_image02.jpg",
    "/2dnano_image03.jpg",
    "/2dnano_image04.jpg"
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? carouselImages.length - 1 : currentImageIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === carouselImages.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Advanced Materials for
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent block">
              Tomorrow's World
            </span>
          </h1>
          <p className="text-xl md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Pioneering sustainable 2D materials and revolutionary energy storage solutions with graphene cement technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Learn About Us
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/how-we-do-it"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Our Technology
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose 2D Nano?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing materials science with breakthrough innovations in 2D materials and energy storage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "High Quality Graphene",
                description: "Produced by state-of-the-art technology with our unique online monitoring system"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Superior Safety",
                description: "Advanced materials engineered for maximum safety and reliability"
              },
              {
                icon: <Recycle className="w-8 h-8" />,
                title: "Sustainable Production",
                description: "Eco-friendly manufacturing processes with minimal environmental impact"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Scalable Technology",
                description: "Solutions designed to scale from laboratory to industrial applications"
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-emerald-500 mb-4 group-hover:text-blue-500 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Graphene Cement Supercapacitors
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Our breakthrough technology combines the conductivity of graphene with the structural properties of cement to create supercapacitors with unprecedented energy density and charging speed.
              </p>
              <div className="space-y-4">
                {[
                  "10F capacitance with ultra-fast charging",
                  "100,000+ charge cycles lifespan",
                  "Operating range: -40°C to 85°C",
                  "Sustainable material composition"
                ].map((spec, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-white/90">{spec}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/how-we-do-it"
                className="inline-flex items-center gap-2 mt-8 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </div>
            
            {/* Image Carousel */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 overflow-hidden">
                <h3 className="text-2xl font-bold mb-6 text-center">Technology Gallery</h3>
                
                {/* Carousel Container */}
                <div className="relative h-64 rounded-xl overflow-hidden">
                  {/* Images */}
                  <div className="relative w-full h-full">
                    {carouselImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Technology showcase ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                
                {/* Dots Indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? 'bg-emerald-400 scale-110'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-white/20 rounded-full h-1">
                    <div 
                      className="h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all duration-300"
                      style={{ width: `${((currentImageIndex + 1) / carouselImages.length) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-center text-white/70 text-sm mt-2">
                    {currentImageIndex + 1} of {carouselImages.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Energy Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover how our advanced 2D materials can revolutionize your applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-900 to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-slate-800 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/press-news"
              className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all duration-300"
            >
              Latest News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;