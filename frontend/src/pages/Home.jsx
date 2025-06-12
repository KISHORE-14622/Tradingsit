import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  ArrowRightIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  TruckIcon,
  ChevronRightIcon,
  CubeIcon,
  GlobeAltIcon,
  ScaleIcon,
  CheckIcon
} from '@heroicons/react/24/solid';
import blackPepper from '../assets/spices/pepper.jpg';
import cardamom from '../assets/spices/cardamom.jpg';
import turmeric from '../assets/spices/turmeric.jpg';
import cinnamon from '../assets/spices/cinnamon.jpg';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/backgrounds/spice-market.jpg';
import Footer from '../components/Footer';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img 
            src={backgroundImage} 
            alt="Spice market background"
            className="w-full h-full object-cover" 
          />
          
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
          >
            Premium Spices <span className="text-amber-600">Global Trade</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto text-white"
          >
            Are you looking for World Class Spices? 
            Connecting spice growers with international markets through reliable and efficient trade services
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              to="/contact" 
              className="bg-white text-amber-800 px-8 py-4 rounded-lg font-bold hover:bg-amber-100 transition flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-white"
            >
              Learn More <ChevronRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Spices */}
      <section className="py-16 md:py-20 container mx-auto px-4 relative z-10 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our <span className="text-amber-600">Premium</span> Spice Selection
          </h2>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: "Black Pepper",
                origin: "Kerala, India",
                description: "Rich aroma and sharp flavor, perfect for global cuisine",
                image: blackPepper
              },
              {
                name: "Cardamom",
                origin: "Guatemala",
                description: "Aromatic pods with sweet and floral notes",
                image: cardamom
              },
              {
                name: "Turmeric",
                origin: "Madras, India",
                description: "Vibrant color with earthy, peppery flavor",
                image: turmeric
              },
              {
                name: "Cinnamon",
                origin: "Sri Lanka",
                description: "Sweet and woody spice with health benefits",
                image: cinnamon
              }
            ].map((spice, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={spice.image} 
                    alt={spice.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{spice.name}</h3>
                  <p className="text-amber-600 text-sm font-medium mb-3">{spice.origin}</p>
                  <p className="text-gray-600">{spice.description}</p>
                  <Link 
                    to="/contact" 
                    className="mt-4 inline-block text-amber-700 hover:text-amber-800 font-medium transition-colors duration-300"
                  >
                    Inquire about this spice →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 relative z-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Our <span className="text-amber-600">Spice Trade</span> Services
            </h2>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <TruckIcon className="h-12 w-12 text-amber-600" />,
                  title: "Global Logistics",
                  desc: "Temperature-controlled transportation for optimal spice preservation"
                },
                {
                  icon: <CubeIcon className="h-12 w-12 text-amber-600" />,
                  title: "Quality Packaging",
                  desc: "Specialized packaging to maintain freshness and aroma"
                },
                {
                  icon: <CurrencyDollarIcon className="h-12 w-12 text-amber-600" />,
                  title: "Trade Finance",
                  desc: "Financial solutions for spice importers and exporters"
                },
                {
                  icon: <GlobeAltIcon className="h-12 w-12 text-amber-600" />,
                  title: "Market Access",
                  desc: "Connecting growers with international buyers"
                },
                {
                  icon: <ScaleIcon className="h-12 w-12 text-amber-600" />,
                  title: "Quality Assurance",
                  desc: "Rigorous testing for purity and quality standards"
                },
                {
                  icon: <ChartBarIcon className="h-12 w-12 text-amber-600" />,
                  title: "Market Analysis",
                  desc: "Trends and pricing for strategic spice trading"
                }
              ].map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-amber-100 p-4 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                  <Link 
                    to="/services" 
                    className="mt-4 inline-block text-sm text-amber-700 hover:text-amber-800 font-medium transition-colors duration-300"
                  >
                    Learn more →
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10">
        <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center"
            >
              {[
                { number: "50+", label: "Spice Varieties" },
                { number: "30+", label: "Source Countries" },
                { number: "98%", label: "Quality Satisfaction" },
                { number: "24/7", label: "Customer Support" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  className="p-6"
                >
                  <p className="text-4xl md:text-5xl font-bold mb-3 text-amber-200">{stat.number}</p>
                  <p className="text-amber-100 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 container mx-auto px-4 relative z-10 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            What Our <span className="text-amber-600">Clients</span> Say
          </h2>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                quote: "Their black pepper from Kerala is the finest quality we've imported in years. The logistics were flawless.",
                name: "Maria Rodriguez",
                company: "Gourmet Foods Europe"
              },
              {
                quote: "PRP Varthagam's cardamom has become our best-selling spice. Their quality control is exceptional.",
                name: "James Wilson",
                company: "Spice World Ltd."
              },
              {
                quote: "The turmeric we source through them consistently meets our high standards for color and purity.",
                name: "Sarah Chen",
                company: "Health Spice Imports"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 inline" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
                
                </div>
              </motion.div>
            ))}
            
          </motion.div>
        </motion.div>
      </section>

      {/* Spice Benefits */}
      <section className="py-16 md:py-20 relative z-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Why Trade Spices <span className="text-amber-600">With Us</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-amber-800 border-b-2 border-amber-200 pb-2">For Buyers</h3>
                <ul className="space-y-4">
                  {[
                    "Direct sourcing from trusted growers",
                    "Competitive pricing with no middlemen",
                    "Consistent quality with lab testing",
                    "Flexible order quantities",
                    "Custom blending and packaging options"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-amber-800 border-b-2 border-amber-200 pb-2">For Sellers</h3>
                <ul className="space-y-4">
                  {[
                    "Access to global markets",
                    "Fair trade practices",
                    "Technical support for quality improvement",
                    "Market intelligence and trends",
                    "Secure and timely payments"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
        
      </section>
      <Footer />
    </div>
    
  );
}