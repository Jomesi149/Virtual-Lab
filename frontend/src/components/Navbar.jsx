import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { LogOut, User, BookOpen, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - 64 
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="bg-surface shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-text-primary font-heading">UX Virtual Lab</span>
            </Link>
          </div>

          {isHomePage && (
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('hero-section')}
                className={`transition-all duration-200 font-body font-semibold relative group py-1 px-3 ${
                  isDark 
                    ? 'text-text-primary hover:text-accent' 
                    : 'text-text-primary hover:text-gray-500'
                }`}
              >
                About
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isDark ? 'bg-accent' : 'bg-gray-500'
                }`}></span>
              </button>
              
              <button
                onClick={() => scrollToSection('features-section')}
                className={`transition-all duration-200 font-body font-semibold relative group py-1 px-3 ${
                  isDark 
                    ? 'text-text-primary hover:text-accent' 
                    : 'text-text-primary hover:text-gray-500'
                }`}
              >
                Features
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isDark ? 'bg-accent' : 'bg-gray-500'
                }`}></span>
              </button>

              <button
                onClick={() => scrollToSection('cta-section')}
                className={`transition-all duration-200 font-body font-semibold relative group py-1 px-3 ${
                  isDark 
                    ? 'text-text-primary hover:text-accent' 
                    : 'text-text-primary hover:text-gray-500'
                }`}
              >
                Labs
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isDark ? 'bg-accent' : 'bg-gray-500'
                }`}></span>
              </button>
            </div>
          )}

          {user && !isHomePage && (
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
              <Link
                to="/dashboard"
                className={`transition-all duration-200 font-body font-semibold relative group py-1 px-3 ${
                  isDark 
                    ? 'text-text-primary hover:text-accent' 
                    : 'text-text-primary hover:text-gray-500'
                }`}
              >
                Dashboard
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isDark ? 'bg-accent' : 'bg-gray-500'
                }`}></span>
              </Link>
            </div>
          )}

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDark ? 'hover:bg-accent-subtle' : 'hover:bg-gray-200'
                  }`}
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <Sun className="h-5 w-5 text-accent" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-900" />
                  )}
                </button>

                <Link
                  to="/profile"
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDark ? 'hover:bg-accent-subtle' : 'hover:bg-gray-200'
                  }`}
                  aria-label="Profile"
                >
                  <User className={`h-5 w-5 ${isDark ? 'text-accent' : 'text-gray-900'}`} />
                </Link>

                <button
                  onClick={logout}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDark ? 'hover:bg-accent-subtle' : 'hover:bg-gray-200'
                  }`}
                  aria-label="Logout"
                >
                  <LogOut className={`h-5 w-5 ${isDark ? 'text-accent' : 'text-gray-900'}`} />
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-text-secondary hover:text-accent transition-colors font-body">
                  Login
                </Link>
                <Link to="/register" className="bg-accent text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity font-body font-semibold" style={{ textTransform: 'uppercase' }}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
