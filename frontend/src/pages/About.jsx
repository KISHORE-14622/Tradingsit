import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  CheckBadgeIcon,
  MapIcon,
  CalendarIcon,
  ChartBarIcon,
  GlobeAsiaAustraliaIcon,
  SparklesIcon,
  TrophyIcon,
  ScaleIcon,
  HeartIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/solid';
import Footer from '../components/Footer';

// Data structures for reusable content
const whyChooseUsItems = [
  "Directly sourced from origin farms",
  "Rigorous quality testing",
  "Ethical and sustainable sourcing",
  "Specialized spice logistics",
  "Custom grinding and packaging",
  "Market intelligence reports"
];

const sourcingRegions = [
  { region: "India", spices: "Black Pepper, Cardamom, Turmeric" }
  
];

const certifications = [
  { name: "ISO 22000", desc: "Food Safety Management", icon: ShieldCheckIcon },
  { name: "Organic", desc: "Certified Organic Products", icon: HeartIcon },
  { name: "Fair Trade", desc: "Ethical Sourcing", icon: ScaleIcon },
  { name: "HACCP", desc: "Hazard Analysis", icon: CheckBadgeIcon }
];

const milestones = [
  { year: "2010", event: "Founded in Kerala, India" },
  { year: "2013", event: "Expanded to international markets" },
  { year: "2016", event: "Achieved ISO 22000 certification" },
  { year: "2019", event: "Launched sustainable farming initiative" },
  { year: "2022", event: "Reached 500+ partner farms" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* About Hero */}
      <section className="bg-amber-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About PR Varthagam Spices</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Connecting the world's spice growers with global markets since 2010
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Spice Journey</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2010 in Kerala, India, PRP Varthagam began as a small spice export company 
                specializing in premium black pepper and cardamom. Today, we've grown into a global 
                spice trading company connecting growers in Asia, Africa, and South America with 
                buyers worldwide.
              </p>
              <p className="text-gray-700 mb-6">
                Our expertise spans the entire spice value chain - from sourcing the finest quality 
                at origin to ensuring perfect delivery to our customers' doors. We maintain strict 
                quality standards while preserving traditional farming practices.
              </p>
              
              {/* Our Values Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Our Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Quality First", desc: "Uncompromising standards in every batch", icon: TrophyIcon },
                    { title: "Sustainability", desc: "Environmentally responsible sourcing", icon: HeartIcon },
                    { title: "Farmer Welfare", desc: "Fair prices and long-term partnerships", icon: UserGroupIcon },
                    { title: "Innovation", desc: "Modern techniques with traditional wisdom", icon: SparklesIcon }
                  ].map((value, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                      <value.icon className="h-5 w-5 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold">{value.title}</h4>
                        <p className="text-sm text-gray-600">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 mb-6">
                <p className="italic text-amber-800">
                  "Our mission is to bring the world's finest spices to global markets while ensuring 
                  fair compensation for growers and exceptional quality for buyers."
                </p>
              </div>

              {/* Our Process Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Our Quality Process</h3>
                <div className="space-y-4">
                  {[
                    "Farm selection and partnership development",
                    "Strict quality parameters established",
                    "Harvest monitoring and collection",
                    "Laboratory testing for purity and quality",
                    "Proper storage and humidity control",
                    "Custom processing as per client requirements",
                    "Final quality check before shipment"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <CheckBadgeIcon className="h-6 w-6 text-amber-600 mr-2" />
                  Why Choose Our Spices
                </h3>
                <ul className="space-y-4">
                  {whyChooseUsItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <GlobeAsiaAustraliaIcon className="h-6 w-6 text-amber-600 mr-2" />
                  Spice Sourcing Regions
                </h3>
                <div className="space-y-3">
                  {sourcingRegions.map((item, index) => (
                    <div key={index} className="border-b border-gray-100 pb-2 last:border-0">
                      <p className="font-medium">{item.region}</p>
                      <p className="text-sm text-gray-600">{item.spices}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Milestones */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <CalendarIcon className="h-6 w-6 text-amber-600 mr-2" />
                  Our Milestones
                </h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex">
                      <div className="bg-amber-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                        {milestone.year}
                      </div>
                      <p>{milestone.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Certifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                  <div className="h-16 w-16 mx-auto mb-3 bg-amber-100 rounded-full flex items-center justify-center">
                    <cert.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-bold">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team CTA */}
         
        </section>
      </main>

      <Footer />
    </div>
  );
}