import React from 'react';
import { Atom, Zap, Cog, CheckCircle, ArrowRight } from 'lucide-react';

const HowWeDoIt: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-4xl font-bold mb-6">How We Do It</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-xl text-white/80 max-w-4xl mx-auto">
            Our revolutionary approach to 2D materials engineering and sustainable production methods
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From laboratory research to scalable production, we follow a rigorous process to develop breakthrough materials
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Research & Development",
                description: "Advanced materials science research using cutting-edge techniques and equipment",
                icon: <Atom className="w-8 h-8" />,
                details: [
                  "Molecular-level material design",
                  "Computer simulations and modeling",
                  "Lab-scale synthesis and testing",
                  "Performance optimization"
                ]
              },
              {
                step: "02",
                title: "Prototyping & Testing",
                description: "Rigorous testing and validation of materials under real-world conditions",
                icon: <Zap className="w-8 h-8" />,
                details: [
                  "Electrical performance testing",
                  "Mechanical properties analysis",
                  "Environmental stress testing",
                  "Safety and reliability validation"
                ]
              },
              {
                step: "03",
                title: "Scale-up & Production",
                description: "Sustainable manufacturing processes designed for commercial scalability",
                icon: <Cog className="w-8 h-8" />,
                details: [
                  "Process optimization",
                  "Quality control systems",
                  "Sustainable production methods",
                  "Industrial-scale manufacturing"
                ]
              }
            ].map((process, index) => (
              <div key={index} className="relative group">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group-hover:border-emerald-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-emerald-500 group-hover:text-blue-500 transition-colors duration-300">
                      {process.icon}
                    </div>
                    <span className="text-3xl font-bold text-gray-300 group-hover:text-emerald-300 transition-colors duration-300">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 mb-6">{process.description}</p>
                  
                  <ul className="space-y-2">
                    {process.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Deep Dive */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Graphene Cement Technology
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Revolutionary Material Science</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our breakthrough combines the exceptional electrical properties of graphene with the structural integrity of cement, creating a new class of materials that revolutionizes energy storage.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Graphene Integration",
                    description: "Seamless incorporation of graphene sheets into cement matrix for optimal conductivity"
                  },
                  {
                    title: "Structural Optimization",
                    description: "Engineered microstructure for maximum surface area and energy storage capacity"
                  },
                  {
                    title: "Performance Enhancement",
                    description: "Advanced additives and processing techniques for superior electrical properties"
                  }
                ].map((tech, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{tech.title}</h4>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Performance Metrics</h4>
                <div className="space-y-6">
                  {[
                    { label: "Capacitance", value: "10 F", progress: 85 },
                    { label: "Charge Time", value: "< 10s", progress: 95 },
                    { label: "Cycle Life", value: "100k+", progress: 90 },
                    { label: "Efficiency", value: "98%", progress: 98 }
                  ].map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">{metric.label}</span>
                        <span className="font-bold text-gray-900">{metric.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-500"
                          style={{ width: `${metric.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Focus */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainable Production</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Environmental responsibility is at the core of our manufacturing process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Eco-Friendly Materials",
                description: "Sustainable sourcing of raw materials with minimal environmental impact",
                percentage: "90%"
              },
              {
                title: "Energy Efficient",
                description: "Low-energy production processes reducing carbon footprint",
                percentage: "75%"
              },
              {
                title: "Waste Reduction",
                description: "Circular economy principles with material recycling and reuse",
                percentage: "85%"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-4">{item.percentage}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rigorous testing and quality control ensure consistent, reliable performance
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Testing Standards</h3>
                <div className="space-y-4">
                  {[
                    "ISO 9001:2015 Quality Management",
                    "IEC 62576 Electric Double-layer Capacitors",
                    "ASTM Material Testing Standards",
                    "Environmental Impact Assessments"
                  ].map((standard, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">{standard}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Continuous Improvement</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to excellence drives continuous innovation in our processes, ensuring that every product meets the highest standards of performance, safety, and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeDoIt;