import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Shield, TrendingUp } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'

export default function Home() {
  const { user } = useAuth()
  const { isDark } = useTheme()

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Hero Section */}
      <section id="hero-section" className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gradient-to-br from-[#1A5469] to-[#0F1A20]' : 'bg-gradient-to-br from-primary-600 to-primary-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-5xl font-bold mb-6 font-heading`} style={{ fontWeight: 700, color: isDark ? '#FFFFFF' : '#000000' }}>
              Master the Laws of UX
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-body" style={{
              fontWeight: 400,
              color: isDark ? '#A0B4C0' : '#000000'
            }}>
              Learn and apply fundamental principles of user experience design through interactive lessons and real-world examples.
            </p>
            <Link
              to={user ? "/dashboard" : "/register"}
              className={`inline-flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200 font-body ${
                isDark 
                  ? 'bg-[#1D2F38] text-accent hover:bg-accent hover:text-white' 
                  : 'bg-white text-primary-600 hover:bg-gray-300'
              }`}
              style={{ textTransform: 'uppercase' }}
            >
              <span>{user ? "Go to Dashboard" : "Get Started"}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-20 bg-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 font-heading ${
            isDark ? 'text-text-primary' : 'text-gray-900'
          }`} style={{ fontWeight: 700 }}>
            Why Learn UX Laws?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`text-center transform transition-transform duration-200 hover:scale-110 rounded-lg ${isDark ? 'bg-accent-subtle' : 'bg-gray-100'} p-6 sm:p-8`}>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isDark ? 'bg-accent-subtle text-accent' : 'bg-primary-100 text-primary-600'}`}>
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 font-heading ${isDark ? 'text-text-primary' : 'text-gray-900'}`} style={{ fontWeight: 600 }}>
                Comprehensive Content
              </h3>
              <p className={`font-body ${isDark ? 'text-text-secondary' : 'text-gray-700'}`} style={{ fontWeight: 400 }}>
                Learn from well-researched UX principles including Fitts's Law, Hick's Law, Miller's Law, and more.
              </p>
            </div>

            <div className={`text-center transform transition-transform duration-200 hover:scale-110 rounded-lg ${isDark ? 'bg-accent-subtle' : 'bg-gray-100'} p-6 sm:p-8`}>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isDark ? 'bg-accent-subtle text-accent' : 'bg-primary-100 text-primary-600'}`}>
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 font-heading ${isDark ? 'text-text-primary' : 'text-gray-900'}`} style={{ fontWeight: 600 }}>
                Track Your Progress
              </h3>
              <p className={`font-body ${isDark ? 'text-text-secondary' : 'text-gray-700'}`} style={{ fontWeight: 400 }}>
                Monitor your learning journey and see which UX laws you've mastered.
              </p>
            </div>

            <div className={`text-center transform transition-transform duration-200 hover:scale-110 rounded-lg ${isDark ? 'bg-accent-subtle' : 'bg-gray-100'} p-6 sm:p-8`}>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isDark ? 'bg-accent-subtle text-accent' : 'bg-primary-100 text-primary-600'}`}>
                <Shield className="h-8 w-8" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 font-heading ${isDark ? 'text-text-primary' : 'text-gray-900'}`} style={{ fontWeight: 600 }}>
                Secure & Private
              </h3>
              <p className={`font-body ${isDark ? 'text-text-secondary' : 'text-gray-700'}`} style={{ fontWeight: 400 }}>
                Your learning data is protected with industry-standard authentication and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-background' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold mb-4 font-heading ${
            isDark ? 'text-text-primary' : 'text-gray-900'
          }`} style={{ fontWeight: 700 }}>
            Ready to Start Learning?
          </h2>
          <p className={`text-xl mb-8 font-body ${
            isDark ? 'text-text-secondary' : 'text-gray-700'
          }`} style={{ fontWeight: 400 }}>
            Join our platform and master the fundamental laws of user experience design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!user && (
              <Link to="/register" className="bg-accent text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-body font-semibold inline-block" style={{ textTransform: 'uppercase' }}>
                Create Free Account
              </Link>
            )}
            <Link to="/dashboard" className={`px-8 py-3 rounded-lg font-body font-semibold inline-block transition-all duration-200 ${
              isDark 
                ? 'bg-[#1D2F38] text-accent hover:bg-accent hover:text-white' 
                : 'bg-gray-200 text-gray-900 hover:bg-gray-400'
            }`} style={{ textTransform: 'uppercase' }}>
              Start Learning Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
