import { useState } from 'react';
import Navbar from '../components/Navbar';
import GetQuoteForm from '../components/GetQuoteForm';
import emailjs from '@emailjs/browser';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/solid';
import Footer from '../components/Footer';

export default function Contact() {
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
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message
      };

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

      {/* Contact Hero */}
      <section className="bg-amber-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Get in touch with our trade experts for personalized assistance
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-amber-800">Our Offices</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  
                  
                </div>
                
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-amber-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-600">+44-7769027118<br />Mon-Fri: 8am - 6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 text-amber-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600">prabhudassuk@gmail.com<br /></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ClockIcon className="h-6 w-6 text-amber-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-bold text-lg">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 - 18:00<br />Saturday: 10:00 - 15:00</p>
                  </div>
                </div>
              </div>

              
              
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <EnvelopeIcon className="h-8 w-8 text-amber-700 mr-3" />
                <h2 className="text-2xl font-bold text-amber-800">Contact Our Team</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    required
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
                    {isSubmitting ? 'Sending...' : 'Send Message'} 
                    {!isSubmitting && <ArrowRightIcon className="h-5 w-5 ml-2" />}
                  </button>
                </div>
              </form>
            </div>

            {/* Get Quote Section */}
            <div className="mt-8">
              <GetQuoteForm />
            </div>

            
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}