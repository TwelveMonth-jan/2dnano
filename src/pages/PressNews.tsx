import React from 'react';
import { Calendar, ExternalLink, Award, Newspaper, Download } from 'lucide-react';

const PressNews: React.FC = () => {
  const newsItems = [
    {
      title: "2D Nano Announces Breakthrough in Graphene Cement Technology",
      date: "January 15, 2025",
      category: "Technology",
      summary: "Revolutionary advancement in supercapacitor materials promises to transform energy storage industry with ultra-fast charging capabilities.",
      image: "https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg",
      link: "#"
    },
    {
      title: "Imperial College London Spin-out Secures Major Funding",
      date: "December 8, 2024",
      category: "Business",
      summary: "2D Nano receives significant investment to accelerate commercial development of advanced 2D materials and expand manufacturing capabilities.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      link: "https://www.imperial.ac.uk/news/257015/new-spinout-produce-2d-materials-sustainably/"
    },
    {
      title: "Award Recognition at Materials Science Innovation Awards",
      date: "November 22, 2024",
      category: "Awards",
      summary: "2D Nano recognized for outstanding innovation in sustainable materials science and breakthrough energy storage solutions.",
      image: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg",
      link: "#"
    },
    {
      title: "Partnership with Leading Automotive Manufacturer",
      date: "October 30, 2024",
      category: "Partnership",
      summary: "Strategic collaboration announced to integrate ultra-fast charging technology into next-generation electric vehicles.",
      image: "https://images.pexels.com/photos/3846209/pexels-photo-3846209.jpeg",
      link: "#"
    },
    {
      title: "Research Publication in Nature Materials",
      date: "September 14, 2024",
      category: "Research",
      summary: "Peer-reviewed study demonstrates superior performance of graphene cement supercapacitors in high-demand applications.",
      image: "https://images.pexels.com/photos/8350339/pexels-photo-8350339.jpeg",
      link: "#"
    },
    {
      title: "Birmingham Battery System Expo 2025 Demonstration",
      date: "August 25, 2024",
      category: "Events",
      summary: "2D Nano to showcase revolutionary wireless charging technology with live RC car demonstration at major industry exhibition.",
      image: "https://images.pexels.com/photos/8566445/pexels-photo-8566445.jpeg",
      link: "#"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Awards':
        return <Award className="w-4 h-4" />;
      case 'Research':
        return <Newspaper className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology':
        return 'bg-blue-100 text-blue-800';
      case 'Business':
        return 'bg-emerald-100 text-emerald-800';
      case 'Awards':
        return 'bg-purple-100 text-purple-800';
      case 'Partnership':
        return 'bg-orange-100 text-orange-800';
      case 'Research':
        return 'bg-indigo-100 text-indigo-800';
      case 'Events':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/press-kit/${filename}`;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-4xl font-bold mb-6">Press & News</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-xl text-white/80 max-w-4xl mx-auto">
            Stay updated with the latest developments, breakthroughs, and announcements from 2D Nano
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mb-6"></div>
          </div>

          {/* Featured Article */}
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl overflow-hidden shadow-xl mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">{newsItems[0].date}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(newsItems[0].category)}`}>
                    {newsItems[0].category}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {newsItems[0].title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {newsItems[0].summary}
                </p>
                <a 
                  href={newsItems[0].link}
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-300"
                >
                  Read More
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item, index) => (
              <article key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.summary}
                  </p>
                  
                  <a 
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    Read More
                    {getCategoryIcon(item.category)}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Press Resources</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our press kit, company information, and media resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Company Fact Sheet",
                description: "Key information, statistics, and company overview",
                icon: <Newspaper className="w-8 h-8" />,
                filename: "Company_Fact_Sheet.pdf"
              },
              {
                title: "High-Resolution Images",
                description: "Professional photos, logos, and product images",
                icon: <Award className="w-8 h-8" />,
                filename: "High_Resolution_Images.pdf"
              },
              {
                title: "Executive Bios",
                description: "Leadership team profiles and background information",
                icon: <ExternalLink className="w-8 h-8" />,
                filename: "Executive_Bios.pdf"
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="text-emerald-500 mb-4 flex justify-center">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <button 
                  onClick={() => handleDownload(resource.filename)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Media Inquiries</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-white/80 mb-8">
            For press inquiries, interviews, or additional information, please contact our media team
          </p>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Press Contact</h3>
                <div className="space-y-2 text-white/80">
                  <p>Email: press@2dnano.com</p>
                  <p>Phone: +44 20 7594 8000</p>
                  <p>Response time: 24 hours</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Complete Media Kit</h3>
                <button 
                  onClick={() => handleDownload('Press_Kit.pdf')}
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <Download className="w-4 h-4" />
                  Download Press Kit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressNews;