import React from 'react';
import { useContent } from '../context/ContentContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { content } = useContent();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting ACT-ICT. We will get back to you shortly.');
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
       <div className="bg-blue-900 py-12 text-center text-white">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-blue-200 mt-2">Get in touch with our expert team today.</p>
       </div>

       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-3 gap-8">
           
           {/* Contact Info Card */}
           <div className="bg-white p-8 rounded-xl shadow-lg h-fit">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600 text-sm">{content.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600 text-sm">{content.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600 text-sm">{content.contact.email}</p>
                  </div>
                </div>
              </div>
           </div>

           {/* Contact Form */}
           <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
             <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                   <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                   <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
                 </div>
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                 <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                   <option>General Inquiry</option>
                   <option>Request Quote</option>
                   <option>Technical Support</option>
                   <option>Partnership</option>
                 </select>
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                 <textarea rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"></textarea>
               </div>
               <button type="submit" className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                 Send Message <Send size={18} className="ml-2" />
               </button>
             </form>
           </div>
         </div>

         {/* Map Placeholder */}
         <div className="mt-12 bg-gray-200 w-full h-80 rounded-xl overflow-hidden shadow-inner">
            <iframe 
              title="Map"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src={content.contact.mapUrl}
              className="filter grayscale hover:grayscale-0 transition duration-500"
            ></iframe>
         </div>
       </div>
    </div>
  );
};

export default Contact;
