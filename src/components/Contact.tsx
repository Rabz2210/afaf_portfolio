import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in working together or have questions about my work? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-indigo-600 text-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <a 
                href="/Afaf_Athar_ML.pdf"
                download="Afaf_Athar_Resume.pdf"
                className="flex items-center bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <Download size={18} className="mr-2" />
                <span className="font-medium">Resume</span>
              </a>
            </div>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="mr-4" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <p>afafathar3007@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-4" size={20} />
                <div>
                  <p className="font-medium">Location</p>
                  <p>Bengaluru, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>
                <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
