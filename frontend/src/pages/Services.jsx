import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import GetQuoteForm from '../components/GetQuoteForm';
import emailjs from '@emailjs/browser';
import {
  ArrowRightIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  TruckIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  CheckIcon,
  PhoneIcon,
  CubeIcon,
  ScaleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/solid';

export default function Services() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Form data being sent:', formData);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message
      };
      console.log('Sending with:', {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_SERVICES_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    });


      console.log('Template params being sent:', templateParams);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
         import.meta.env.VITE_EMAILJS_SERVICES_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({ 
        success: true, 
        message: 'Thank you for your message! Our spice experts will contact you shortly.' 
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Services Hero */}
      <section className="bg-amber-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">Spice Trade Services</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your spice import/export needs
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <TruckIcon className="h-10 w-10 text-amber-600" />,
              title: "Spice Logistics",
              desc: "Temperature-controlled transportation for optimal spice preservation",
              features: ["Air, sea, and land freight", "Customs clearance", "Real-time tracking"]
            },
            {
              icon: <CubeIcon className="h-10 w-10 text-amber-600" />,
              title: "Packaging Solutions",
              desc: "Specialized packaging to maintain freshness and aroma",
              features: ["Vacuum packaging", "Moisture control", "Custom branding"]
            },
            {
              icon: <CurrencyDollarIcon className="h-10 w-10 text-amber-600" />,
              title: "Spice Trade Finance",
              desc: "Financial instruments to facilitate spice trade",
              features: ["Letters of credit", "Payment security", "Currency hedging"]
            },
            {
              icon: <ScaleIcon className="h-10 w-10 text-amber-600" />,
              title: "Quality Control",
              desc: "Ensuring your spices meet international standards",
              features: ["Laboratory testing", "Purity analysis", "Quality certification"]
            },
            {
              icon: <GlobeAltIcon className="h-10 w-10 text-amber-600" />,
              title: "Market Access",
              desc: "Connecting growers with international buyers",
              features: ["Buyer matchmaking", "Trade shows", "Market entry strategy"]
            },
            {
              icon: <ChartBarIcon className="h-10 w-10 text-amber-600" />,
              title: "Spice Market Intelligence",
              desc: "Data-driven insights for strategic trading",
              features: ["Price trends", "Demand analysis", "Competitor benchmarking"]
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Spice Trade Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "1",
                title: "Sourcing",
                desc: "We identify the best spice growers and cooperatives"
              },
              {
                step: "2",
                title: "Quality Check",
                desc: "Rigorous testing for purity, aroma, and moisture content"
              },
              {
                step: "3",
                title: "Logistics",
                desc: "Optimal transportation method for each spice type"
              },
              {
                step: "4",
                title: "Delivery",
                desc: "Final quality check and delivery to your facility"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="h-12 w-12 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spice Types Section */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Spice Varieties We Handle</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Black Pepper", "Cardamom", "Turmeric", "Cinnamon", 
            
          ].map((spice, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <span className="text-amber-700 font-medium">{spice}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <EnvelopeIcon className="h-8 w-8 text-amber-700 mr-3" />
                  <h2 className="text-2xl font-bold text-amber-800">Spice Trade Inquiry</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Spice Requirements*</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                      placeholder="Please specify the spices you're interested in, quantities, and any special requirements"
                    ></textarea>
                  </div>
                  
                  {submitStatus && (
                    <div className={`p-3 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-700 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-800 transition flex items-center justify-center disabled:bg-amber-400"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'} 
                      {!isSubmitting && <ArrowRightIcon className="h-5 w-5 ml-2" />}
                    </button>
                  </div>
                </form>
              </div>

              <div>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Spice Trade Experts</h3>
                  <div className="space-y-3">
                    <p className="flex items-center">
                      <PhoneIcon className="h-5 w-5 text-amber-600 mr-2" />
                      <span>+1 (555) 123-4567</span>
                    </p>
                    <p className="flex items-center">
                      <EnvelopeIcon className="h-5 w-5 text-amber-600 mr-2" />
                      <span>spices@prpvarthagam.example</span>
                    </p>
                    <p className="text-sm text-gray-600 mt-4">
                      Our spice specialists are available to discuss your specific requirements and provide market insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}