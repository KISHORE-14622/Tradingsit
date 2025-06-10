import { useState } from 'react';
import { TruckIcon, ArrowRightIcon, CubeIcon, ScaleIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';

export default function GetQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    cargoType: '',
    weight: '',
    dimensions: ''
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
      console.log("Form data being sent:", formData);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        origin: formData.origin,
        destination: formData.destination,
        cargo_type: formData.cargoType,
        weight: formData.weight,
        dimensions: formData.dimensions,
        message: `New quote request for ${formData.cargoType} shipment from ${formData.origin} to ${formData.destination}`
      };

      console.log("Template params:", templateParams); 

      const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    console.log("EmailJS response:", response);


      setSubmitStatus({ 
        success: true, 
        message: 'Thank you for your quote request! Our logistics team will contact you shortly.' 
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        origin: '',
        destination: '',
        cargoType: '',
        weight: '',
        dimensions: ''
      });
    } catch (error) {
      console.error('Full EmailJS error:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Failed to submit quote request. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-amber-50 p-6 md:p-8 rounded-lg shadow-md border border-amber-100">
      <div className="flex items-center mb-6">
        <TruckIcon className="h-8 w-8 text-amber-700 mr-3" />
        <h2 className="text-2xl font-bold text-amber-800">Get a Free Shipping Quote</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-1">Origin Country*</label>
            <input
              type="text"
              id="origin"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination Country*</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="cargoType" className="block text-sm font-medium text-gray-700 mb-1">Cargo Type*</label>
            <select
              id="cargoType"
              name="cargoType"
              value={formData.cargoType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              required
            >
              <option value="">Select</option>
              <option value="Spices">Spices</option>
              <option value="Perishable">Perishable Goods</option>
              <option value="Hazardous">Hazardous Materials</option>
              <option value="Oversized">Oversized Load</option>
              <option value="Vehicle">Vehicle Transport</option>
            </select>
          </div>
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)*</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          <div>
            <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700 mb-1">Dimensions (LxWxH)</label>
            <input
              type="text"
              id="dimensions"
              name="dimensions"
              value={formData.dimensions}
              onChange={handleChange}
              placeholder="e.g., 120x80x60 cm"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
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
            className="w-full md:w-auto bg-amber-700 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-800 transition flex items-center justify-center disabled:bg-amber-400"
          >
            {isSubmitting ? 'Submitting...' : 'Request Quote'} 
            {!isSubmitting && <ArrowRightIcon className="h-5 w-5 ml-2" />}
          </button>
        </div>
      </form>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <CubeIcon className="h-6 w-6 text-amber-600 mr-2" />
          <span className="text-sm">Secure Packaging</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <ScaleIcon className="h-6 w-6 text-amber-600 mr-2" />
          <span className="text-sm">Weight Accuracy</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <GlobeAltIcon className="h-6 w-6 text-amber-600 mr-2" />
          <span className="text-sm">Global Coverage</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <TruckIcon className="h-6 w-6 text-amber-600 mr-2" />
          <span className="text-sm">Fast Delivery</span>
        </div>
      </div>
    </div>
  );
}