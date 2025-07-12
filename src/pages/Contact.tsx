import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/contact');
        setTimeout(() => setLoading(false), 500);
      } catch (error) {
        console.log('Mock API call to /api/contact');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="flex items-center mb-8">
        <Phone className="w-8 h-8 text-violet-400 mr-3" />
        <h1 className="text-3xl font-bold text-white">Contact Us</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
          <h2 className="text-xl font-semibold text-white mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-violet-400 mr-4" />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">support@quin.blockchain</p>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="w-6 h-6 text-violet-400 mr-4" />
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-violet-400 mr-4" />
              <div>
                <p className="text-gray-400 text-sm">Address</p>
                <p className="text-white">123 Blockchain Ave, Tech City, TC 12345</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
          <h2 className="text-xl font-semibold text-white mb-6">Send Message</h2>
          
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;