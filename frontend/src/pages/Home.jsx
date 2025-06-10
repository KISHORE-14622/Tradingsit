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

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-amber-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">Premium Spices Global Trade</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Connecting spice growers with international markets through reliable and efficient trade services
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-amber-800 px-6 py-3 rounded-md font-bold hover:bg-amber-100 transition flex items-center justify-center"
            >
              Get Started <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white px-6 py-3 rounded-md font-bold hover:bg-amber-700 transition flex items-center justify-center"
            >
              Learn More <ChevronRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Spices */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Premium Spice Selection</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
    <div className="h-48 overflow-hidden">
      <img 
        src={spice.image} 
        alt={spice.name} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1">{spice.name}</h3>
      <p className="text-amber-600 text-sm mb-2">{spice.origin}</p>
      <p className="text-gray-600">{spice.description}</p>
    </div>
  </div>
))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Spice Trade Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <TruckIcon className="h-10 w-10 md:h-12 md:w-12 text-amber-600" />,
                title: "Global Logistics",
                desc: "Temperature-controlled transportation for optimal spice preservation"
              },
              {
                icon: <CubeIcon className="h-10 w-10 md:h-12 md:w-12 text-amber-600" />,
                title: "Quality Packaging",
                desc: "Specialized packaging to maintain freshness and aroma"
              },
              {
                icon: <CurrencyDollarIcon className="h-10 w-10 md:h-12 md:w-12 text-amber-600" />,
                title: "Trade Finance",
                desc: "Financial solutions for spice importers and exporters"
              },
              {
                icon: <GlobeAltIcon className="h-10 w-10 md:h-12 md:w-12 text-amber-600" />,
                title: "Market Access",
                desc: "Connecting growers with international buyers"
              },
              {
                icon: <ScaleIcon className="h-10 w-10 md:h-12 md:w-12 text-amber-600" />,
                title: "Quality Assurance",
                desc: "Rigorous testing for purity and quality standards"
              },
              {
                icon: <ChartBarIcon className="h-10 w-10 md:h-12 md:w-12 text-amber-600" />,
                title: "Market Analysis",
                desc: "Trends and pricing for strategic spice trading"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-amber-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { number: "50+", label: "Spice Varieties" },
              { number: "30+", label: "Source Countries" },
              { number: "98%", label: "Quality Satisfaction" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <p className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</p>
                <p className="text-amber-200 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400 inline" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spice Benefits */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Trade Spices With Us</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-800">For Buyers</h3>
              <ul className="space-y-4">
                {[
                  "Direct sourcing from trusted growers",
                  "Competitive pricing with no middlemen",
                  "Consistent quality with lab testing",
                  "Flexible order quantities",
                  "Custom blending and packaging options"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-800">For Sellers</h3>
              <ul className="space-y-4">
                {[
                  "Access to global markets",
                  "Fair trade practices",
                  "Technical support for quality improvement",
                  "Market intelligence and trends",
                  "Secure and timely payments"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}