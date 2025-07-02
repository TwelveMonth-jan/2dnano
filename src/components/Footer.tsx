import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/2dnano-logo-w.png" 
                alt="2D Nano Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Pioneering advanced 2D materials and energy storage solutions with graphene cement technology for a sustainable future.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.imperial.ac.uk/news/257015/new-spinout-produce-2d-materials-sustainably/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/how-we-do-it" className="text-white/70 hover:text-white transition-colors">How We Do It</Link></li>
              <li><Link to="/press-news" className="text-white/70 hover:text-white transition-colors">Press & News</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70">
                <Mail size={16} className="text-emerald-400" />
                <span className="text-sm">info@2dnano.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Phone size={16} className="text-emerald-400" />
                <span className="text-sm">+44 20 7594 8000</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin size={16} className="text-emerald-400 mt-0.5" />
                <span className="text-sm">Imperial College London<br />South Kensington Campus</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2025 2D Nano. All rights reserved. | Revolutionizing materials science with advanced 2D technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;