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
  SparklesIcon
} from '@heroicons/react/24/solid';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* About Hero */}
      <section className="bg-amber-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About PRP Varthagam Spices</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Connecting the world's spice growers with global markets since 2010
          </p>
        </div>
      </section>

      {/* Main Content */}
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
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 mb-6">
              <p className="italic text-amber-800">
                "Our mission is to bring the world's finest spices to global markets while ensuring 
                fair compensation for growers and exceptional quality for buyers."
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-6">Our Spice Story</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-amber-200 before:bg-opacity-30">
                {[
                  {
                    year: "2010",
                    title: "Founded in Kerala",
                    description: "Started exporting premium black pepper from small farms"
                  },
                  {
                    year: "2013",
                    title: "Expanded to Cardamom",
                    description: "Began sourcing Idukki cardamom from Western Ghats"
                  },
                  {
                    year: "2016",
                    title: "Global Expansion",
                    description: "Established offices in Dubai and Singapore"
                  },
                  {
                    year: "2019",
                    title: "Quality Certification",
                    description: "Achieved ISO, Organic, and Fair Trade certifications"
                  },
                  {
                    year: "2022",
                    title: "Diversified Portfolio",
                    description: "Added 30+ spice varieties to our offerings"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className="absolute left-0 z-10 w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center">
                      <SparklesIcon className="h-5 w-5" />
                    </div>
                    <div className="ml-16">
                      <h4 className="font-bold text-lg">{item.year} - {item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
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
                {[
                  "Directly sourced from origin farms",
                  "Rigorous quality testing",
                  "Ethical and sustainable sourcing",
                  "Specialized spice logistics",
                  "Custom grinding and packaging",
                  "Market intelligence reports"
                ].map((item, index) => (
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
                {[
                  { region: "India", spices: "Black Pepper, Cardamom, Turmeric" },
                  { region: "Vietnam", spices: "Cinnamon, Star Anise" },
                  { region: "Sri Lanka", spices: "Cinnamon, Cloves" },
                  { region: "Indonesia", spices: "Nutmeg, Mace" },
                  { region: "Guatemala", spices: "Cardamom" }
                ].map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-2 last:border-0">
                    <p className="font-medium">{item.region}</p>
                    <p className="text-sm text-gray-600">{item.spices}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Spice Experts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Raj Patel",
                role: "CEO & Founder",
                bio: "Third-generation spice trader with deep roots in Kerala's pepper farms"
              },
              {
                name: "Priya Nair",
                role: "Quality Director",
                bio: "Food scientist specializing in spice quality and safety standards"
              },
              {
                name: "Arun Kumar",
                role: "Head of Sourcing",
                bio: "20 years experience connecting with spice growers across Asia"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <div className="bg-gray-200 h-32 w-32 mx-auto rounded-full mb-4 flex items-center justify-center">
                  <UserGroupIcon className="h-12 w-12 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-amber-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "ISO 22000", desc: "Food Safety Management" },
              { name: "Organic", desc: "Certified Organic Products" },
              { name: "Fair Trade", desc: "Ethical Sourcing" },
              { name: "HACCP", desc: "Hazard Analysis" }
            ].map((cert, index) => (
              <div key={index} className="text-center p-4 border border-gray-100 rounded-lg">
                <div className="h-16 w-16 mx-auto mb-3 bg-amber-100 rounded-full flex items-center justify-center">
                  <CheckBadgeIcon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-bold">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}