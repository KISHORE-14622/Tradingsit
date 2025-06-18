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
  CheckIcon,
  StarIcon,
  ArrowTopRightOnSquareIcon,
   MapIcon,  
  UserGroupIcon
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
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

export default function Home() {
  return (
    <div className="min-h-screen relative bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 -z-10">
          <img 
            src={backgroundImage} 
            alt="Spice market background"
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
          >
            <span className="inline-block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Premium Spices
            </span> {' '}
            <span className="text-white">Global Trade</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto text-white/90"
          >
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
              className="relative overflow-hidden group bg-white text-amber-800 px-8 py-4 rounded-lg font-bold hover:bg-amber-100 transition flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                Get Started <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-10 transition-opacity"></span>
            </Link>
            
            <Link 
              to="/about" 
              className="relative overflow-hidden group border-2 border-white/50 px-8 py-4 rounded-lg font-bold hover:bg-amber-700/30 transition flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-white"
            >
              <span className="relative z-10 flex items-center">
                Learn More <ChevronRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Spices - Enhanced Section */}
      <section className="py-16 md:py-24 relative z-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center mb-4 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
              <StarIcon className="h-4 w-4 mr-2" />
              Premium Selection
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Our <span className="relative">
                <span className="relative z-10">Exquisite</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-200/60 z-0"></span>
              </span> Spice Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked from the world's finest growing regions, each batch is carefully selected for exceptional quality and flavor
            </p>
          </motion.div>

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
                image: blackPepper,
                grade: "Grade A",
                features: ["High piperine content", "Sun-dried", "Hand-sorted"]
              },
              {
                name: "Cardamom",
                origin: "Guatemala",
                description: "Aromatic pods with sweet and floral notes",
                image: cardamom,
                grade: "8mm Bold",
                features: ["Large pods", "Deep green color", "High oil content"]
              },
              {
                name: "Turmeric",
                origin: "Madras, India",
                description: "Vibrant color with earthy, peppery flavor",
                image: turmeric,
                grade: "Finger Type",
                features: ["High curcumin", "Deep orange color", "Sun-dried"]
              },
              {
                name: "Cinnamon",
                origin: "Sri Lanka",
                description: "Sweet and woody spice with health benefits",
                image: cinnamon,
                grade: "Alba Quality",
                features: ["Thin quills", "Sweet aroma", "Low coumarin"]
              }
            ].map((spice, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={spice.image} 
                    alt={spice.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {spice.grade}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{spice.name}</h3>
                    <span className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                      <StarIcon className="h-3 w-3 mr-1" />
                      Premium
                    </span>
                  </div>
                  <p className="text-amber-600 text-sm font-medium mb-3 flex items-center">
                    <MapIcon className="h-4 w-4 mr-1" />
                    {spice.origin}
                  </p>
                  <p className="text-gray-600 mb-4">{spice.description}</p>
                  
                  <ul className="mb-5 space-y-2">
                    {spice.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="mt-4 inline-flex items-center group font-medium text-amber-700 hover:text-amber-800 transition-colors duration-300 border-b border-transparent hover:border-amber-700 pb-1"
                  >
                    Request samples
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Comprehensive <span className="text-amber-600">Trade Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end services designed specifically for the global spice trade
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <TruckIcon className="h-8 w-8 text-amber-600" />,
                title: "Global Logistics",
                desc: "Temperature-controlled transportation for optimal spice preservation",
                features: ["Sea freight", "Air freight", "Customs clearance"]
              },
              {
                icon: <CubeIcon className="h-8 w-8 text-amber-600" />,
                title: "Quality Packaging",
                desc: "Specialized packaging to maintain freshness and aroma",
                features: ["Moisture-proof", "UV protection", "Custom branding"]
              },
              {
                icon: <CurrencyDollarIcon className="h-8 w-8 text-amber-600" />,
                title: "Trade Finance",
                desc: "Financial solutions for spice importers and exporters",
                features: ["Letters of credit", "Payment terms", "Risk management"]
              },
              {
                icon: <GlobeAltIcon className="h-8 w-8 text-amber-600" />,
                title: "Market Access",
                desc: "Connecting growers with international buyers",
                features: ["Buyer matching", "Trade shows", "Market entry"]
              },
              {
                icon: <ScaleIcon className="h-8 w-8 text-amber-600" />,
                title: "Quality Assurance",
                desc: "Rigorous testing for purity and quality standards",
                features: ["Lab testing", "Quality control", "Certifications"]
              },
              {
                icon: <ChartBarIcon className="h-8 w-8 text-amber-600" />,
                title: "Market Analysis",
                desc: "Trends and pricing for strategic spice trading",
                features: ["Price forecasting", "Demand analysis", "Crop reports"]
              }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-amber-100 p-4 rounded-full group-hover:bg-amber-200 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center mb-5">{service.desc}</p>
                
                <ul className="mb-6 space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/services" 
                  className="mt-4 inline-flex items-center justify-center w-full py-2 px-4 border border-amber-200 rounded-lg text-amber-700 hover:bg-amber-50 font-medium transition-colors"
                >
                  Learn more
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10">
        <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('../assets/patterns/spice-pattern.svg')] bg-repeat opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {[
                { number: "50+", label: "Spice Varieties", icon: <CubeIcon className="h-8 w-8 mx-auto mb-3 text-amber-300" /> },
                { number: "30+", label: "Source Countries", icon: <GlobeAltIcon className="h-8 w-8 mx-auto mb-3 text-amber-300" /> },
                { number: "98%", label: "Quality Satisfaction", icon: <CheckIcon className="h-8 w-8 mx-auto mb-3 text-amber-300" /> },
                { number: "24/7", label: "Customer Support", icon: <UserGroupIcon className="h-8 w-8 mx-auto mb-3 text-amber-300" /> }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  className="p-6 bg-white/5 rounded-xl backdrop-blur-sm"
                >
                  {stat.icon}
                  <p className="text-4xl md:text-5xl font-bold mb-3 text-amber-200">{stat.number}</p>
                  <p className="text-amber-100 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spice Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Why <span className="text-amber-600">Partners</span> Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We create value across the entire supply chain for both buyers and sellers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <UserGroupIcon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800">For Buyers</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Direct sourcing from trusted growers",
                  "Competitive pricing with no middlemen",
                  "Consistent quality with lab testing",
                  "Flexible order quantities",
                  "Custom blending and packaging options",
                  "Reliable logistics and documentation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
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
              className="bg-white p-8 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <ScaleIcon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800">For Sellers</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Access to global markets",
                  "Fair trade practices",
                  "Technical support for quality improvement",
                  "Market intelligence and trends",
                  "Secure and timely payments",
                  "Logistics and export documentation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-700 to-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-amber-200">Elevate</span> Your Spice Business?
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Join hundreds of satisfied partners in our global spice network
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-amber-800 px-8 py-4 rounded-lg font-bold hover:bg-amber-100 transition flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white/50 px-8 py-4 rounded-lg font-bold hover:bg-amber-700/30 transition flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-white"
              >
                Learn About Us
                <ChevronRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}