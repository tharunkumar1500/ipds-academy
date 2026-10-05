import { useState } from 'react';
import { Menu, X, ChevronRight, BookOpen, Users, Trophy, Award } from 'lucide-react';

const courses = [
  { name: 'UPSC & IAS', description: 'Comprehensive coaching for civil services exams with expert guidance.', icon: <Award className="w-8 h-8 text-orange-500" /> },
  { name: 'TNPSC', description: 'State public service commission preparation tailored for all groups.', icon: <BookOpen className="w-8 h-8 text-orange-500" /> },
  { name: 'NEET & JEE', description: 'Rigorous training for medical and engineering entrance exams.', icon: <Trophy className="w-8 h-8 text-orange-500" /> },
  { name: 'Banking & Railway', description: 'Focused sessions on quantitative aptitude, reasoning, and banking awareness.', icon: <Users className="w-8 h-8 text-orange-500" /> },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-extrabold text-orange-600 tracking-tight">IPDS ACADEMY</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-orange-500 transition font-medium">Home</a>
              <a href="#about" className="text-gray-600 hover:text-orange-500 transition font-medium">About Us</a>
              <a href="#courses" className="text-gray-600 hover:text-orange-500 transition font-medium">Courses</a>
              <a href="#politics" className="text-gray-600 hover:text-orange-500 transition font-medium">Political Training</a>
              <a href="#contact" className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg hover:shadow-orange-500/30">Join Now</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-orange-500 focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium">Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium">About Us</a>
              <a href="#courses" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium">Courses</a>
              <a href="#politics" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium">Political Training</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-orange-600 font-bold">Join Now</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-16 md:pt-40 md:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Empowering Minds, <span className="text-orange-500">Shaping Leaders.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
              IPDS Academy provides premier coaching for competitive exams including UPSC, TNPSC, NEET, JEE, and pioneering training for future political leaders of India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#courses" className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-600 transition shadow-lg hover:shadow-orange-500/40 flex items-center justify-center">
                Explore Courses <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#politics" className="border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-full font-bold text-lg hover:border-orange-500 hover:text-orange-500 transition flex items-center justify-center">
                Political Training
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-400 rounded-full blur-3xl opacity-20 transform scale-110"></div>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students studying"
                className="relative rounded-2xl shadow-2xl object-cover h-[400px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose IPDS Academy?</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-12 rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-xl transition border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Expert Faculty</h3>
              <p className="text-gray-600">Learn from experienced educators, civil servants, and subject matter experts dedicated to your success.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-xl transition border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Comprehensive Material</h3>
              <p className="text-gray-600">Access meticulously crafted study materials and regular mock tests matching the latest exam patterns.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-xl transition border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Proven Results</h3>
              <p className="text-gray-600">Our students consistently achieve top ranks across various state and national level examinations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Courses</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">We offer specialized coaching programs designed to help you crack the toughest competitive exams in India.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100 flex flex-col items-center text-center group">
                <div className="mb-6 transform group-hover:scale-110 transition duration-300">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.name}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{course.description}</p>
                <button className="text-orange-500 font-semibold hover:text-orange-600 flex items-center">
                  Know More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Political Leadership Training Section */}
      <section id="politics" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center border border-orange-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12 relative z-10">
              <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm mb-6">
                Unique Program
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Political Leadership & Strategy Training
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Want to make a real difference in the nation? We are proud to offer an exclusive training program for aspiring politicians. Learn the dynamics of Indian politics, constitutional rights, campaign strategies, public speaking, and grassroots leadership.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div> Indian Political System & Constitution
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div> Electoral Strategies & Campaign Management
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div> Oratory Skills & Public Relations
                </li>
              </ul>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-lg">
                Register Interest
              </button>
            </div>
            <div className="lg:w-1/2 relative z-10 w-full">
              <img
                src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Political gathering"
                className="rounded-2xl shadow-xl object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ipds */}

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to shape your future?</h2>
          <p className="text-gray-300 mb-10 text-lg">Join IPDS Academy today and take the first step towards a successful career and contributing to the nation's growth.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="text"
              placeholder="Your Phone Number"
              className="bg-white text-black placeholder-gray-500 px-6 py-3 rounded-full border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-auto"
            />
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition flex items-center justify-center whitespace-nowrap">
              Request Callback
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-extrabold text-orange-600 tracking-tight">IPDS ACADEMY</span>
            <p className="mt-4 text-gray-500 text-sm">
              Your trusted partner in competitive exam preparation and leadership development.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#home" className="hover:text-orange-500 transition">Home</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#courses" className="hover:text-orange-500 transition">Courses</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Exams</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition">UPSC & IAS</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">TNPSC</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">NEET & JEE</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Banking</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Email: info@ipdsacademy.com</li>
              <li>Phone: +91 97516 97775</li>
              <li>Address: 4/2, A Block Natarajapuram, Rani Anna Nagar, Arumbakkam, Chennai- 600 106</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} IPDS Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
