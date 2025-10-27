import { Link } from 'react-router-dom'
import { BookOpen, Mail, Github, Linkedin } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer className={`transition-colors duration-300 ${
      isDark ? 'bg-surface border-t border-accent-subtle' : 'bg-gray-100 border-t border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-text-primary font-heading">UX Virtual Lab</span>
            </div>
            <p className={`text-sm font-body ${isDark ? 'text-text-secondary' : 'text-gray-600'}`}>
              Master the fundamental laws of user experience design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-semibold mb-4 font-heading ${isDark ? 'text-text-primary' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className={`text-sm font-body transition-colors ${
                  isDark ? 'text-text-secondary hover:text-gray-400' : 'text-gray-600 hover:text-gray-800'
                }`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className={`text-sm font-body transition-colors ${
                  isDark ? 'text-text-secondary hover:text-gray-400' : 'text-gray-600 hover:text-gray-800'
                }`}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/profile" className={`text-sm font-body transition-colors ${
                  isDark ? 'text-text-secondary hover:text-gray-400' : 'text-gray-600 hover:text-gray-800'
                }`}>
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className={`font-semibold mb-4 font-heading ${isDark ? 'text-text-primary' : 'text-gray-900'}`}>
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className={`text-sm font-body transition-colors ${
                  isDark ? 'text-text-secondary hover:text-gray-400' : 'text-gray-600 hover:text-gray-800'
                }`}>
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm font-body transition-colors ${
                  isDark ? 'text-text-secondary hover:text-gray-400' : 'text-gray-600 hover:text-gray-800'
                }`}>
                  About UX Laws
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm font-body transition-colors ${
                  isDark ? 'text-text-secondary hover:text-gray-400' : 'text-gray-600 hover:text-gray-800'
                }`}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className={`font-semibold mb-4 font-heading ${isDark ? 'text-text-primary' : 'text-gray-900'}`}>
              Connect
            </h3>
            <div className="flex space-x-4">
              <a href="#" className={`transition-colors ${
                isDark ? 'text-accent hover:text-gray-400' : 'text-gray-600 hover:text-gray-800'
              }`}>
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className={`transition-colors ${
                isDark ? 'text-accent hover:text-gray-400' : 'text-gray-600 hover:text-gray-800'
              }`}>
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className={`transition-colors ${
                isDark ? 'text-accent hover:text-gray-400' : 'text-gray-600 hover:text-gray-800'
              }`}>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-8 border-t ${isDark ? 'border-accent-subtle' : 'border-gray-200'}`}>
          <p className={`text-center text-sm font-body ${isDark ? 'text-text-secondary' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} UX Virtual Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
