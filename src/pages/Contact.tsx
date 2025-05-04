
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-gray-700">
              We'd love to hear from you! Whether you have questions about our products, need assistance with an order, 
              or want to learn more about our rental options, our team is here to help.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Address:</h3>
                  <p className="text-gray-700">B55, Sukantanagar, Saltlake, Sector 4</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Phone:</h3>
                  <p className="text-gray-700">+91 9382607143</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Email:</h3>
                  <p className="text-gray-700">sohamhore122@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-medium">Monday - Friday:</span> 10:00 AM - 7:00 PM</li>
                <li><span className="font-medium">Saturday:</span> 11:00 AM - 5:00 PM</li>
                <li><span className="font-medium">Sunday:</span> Closed</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"></textarea>
              </div>
              <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
