import React from 'react';
import { Target, Users, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-4xl font-bold mb-6">About 2D Nano</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-xl text-white/80 max-w-4xl mx-auto">
            We are pioneering the future of materials science through innovative 2D materials and revolutionary energy storage solutions
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-emerald-500" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To revolutionize energy storage and materials science through sustainable, high-performance 2D materials that enable faster, safer, and more efficient technologies for a cleaner future.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-blue-500" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the global leader in advanced 2D materials, creating breakthrough technologies that transform industries and contribute to sustainable development worldwide.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              <div className="space-y-4">
                {[
                  "Breakthrough in graphene cement supercapacitor technology",
                  "Imperial College London spin-out company",
                  "Patent-pending sustainable production methods",
                  "Industry partnerships with leading manufacturers",
                  "Award-winning research in materials science"
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-8">
                Founded as a spin-out from Imperial College London, 2D Nano emerged from groundbreaking research in advanced materials science. Our journey began with a simple yet ambitious goal: to harness the extraordinary properties of 2D materials for practical, real-world applications.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Our breakthrough came with the development of graphene cement supercapacitors - a revolutionary technology that combines the exceptional conductivity of graphene with the structural properties of cement. This innovation represents a paradigm shift in energy storage, offering ultra-fast charging capabilities while maintaining sustainability at its core.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Today, we continue to push the boundaries of what's possible in materials science, developing solutions that not only meet the demands of modern technology but also contribute to a more sustainable future. Our work spans across multiple industries, from automotive and electronics to construction and renewable energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Led by world-class researchers and industry experts in materials science and engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: "Research & Development",
                description: "PhD-level materials scientists and engineers from leading universities",
                icon: <Users className="w-12 h-12 text-emerald-500" />
              },
              {
                role: "Industry Partnerships",
                description: "Strategic collaborations with manufacturing and technology leaders",
                icon: <Globe className="w-12 h-12 text-blue-500" />
              },
              {
                role: "Innovation Excellence",
                description: "Award-winning research team recognized for breakthrough innovations",
                icon: <Award className="w-12 h-12 text-purple-500" />
              }
            ].map((team, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  {team.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{team.role}</h3>
                <p className="text-gray-600">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing the boundaries of materials science through cutting-edge research"
              },
              {
                title: "Sustainability",
                description: "Developing eco-friendly solutions that benefit both industry and environment"
              },
              {
                title: "Excellence",
                description: "Maintaining the highest standards in research, development, and manufacturing"
              },
              {
                title: "Collaboration",
                description: "Building partnerships that drive innovation and accelerate progress"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{value.title[0]}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;