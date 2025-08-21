import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">H</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Sacred Journey</h3>
                <p className="text-sm opacity-90">Hajj & Umrah Travel</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Your trusted partner for spiritual journeys to the holy cities of Mecca and Medina. 
              We provide premium Hajj and Umrah packages with exceptional care and service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/packages" className="opacity-90 hover:text-secondary transition-colors">Packages</Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Hajj Packages</li>
              <li>Umrah Packages</li>
              <li>Visa Processing</li>
              <li>Hotel Bookings</li>
              <li>Flight Arrangements</li>
              <li>Group Tours</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="opacity-90">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="opacity-90">info@sacredjourney.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="opacity-90">123 Islamic Center St, New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2024 Sacred Journey. All rights reserved. | Licensed Travel Agency</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;