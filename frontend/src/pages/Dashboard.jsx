import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BookOpen, CheckCircle, Circle } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Dashboard() {
  const [laws, setLaws] = useState([])
  const [userProgress, setUserProgress] = useState({})
  const [loading, setLoading] = useState(true)
  const { isDark } = useTheme()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [lawsRes, profileRes] = await Promise.all([
        axios.get('/api/ux-laws'),
        axios.get('/api/user/profile')
      ])
      
      setLaws(lawsRes.data.data)
      setUserProgress(Object.fromEntries(profileRes.data.data.progress || new Map()))
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setLoading(false)
    }
  }

  const getCategoryColor = (category) => {
    const colors = {
      cognitive: isDark ? 'bg-purple-900/40 text-purple-300' : 'bg-purple-100 text-purple-700',
      perception: isDark ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-700',
      interaction: isDark ? 'bg-green-900/40 text-green-300' : 'bg-green-100 text-green-700',
      behavior: isDark ? 'bg-orange-900/40 text-orange-300' : 'bg-orange-100 text-orange-700'
    }
    return colors[category] || (isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700')
  }

  const completedCount = Object.values(userProgress).filter(Boolean).length
  const totalCount = laws.length
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 font-heading ${isDark ? 'text-text-primary' : 'text-gray-900'}`} style={{ fontSize: '56px', fontWeight: 700 }}>
            UX Laws Dashboard
          </h1>
          <p className={`font-body ${isDark ? 'text-text-secondary' : 'text-gray-700'}`}>
            Explore and learn fundamental principles of user experience design
          </p>
        </div>

        {/* Progress Card */}
        <div className="bg-surface rounded-lg shadow-sm p-6 mb-8 transition-colors duration-300">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-heading font-semibold text-text-primary" style={{ fontSize: '36px', fontWeight: 500 }}>
              Your Progress
            </h2>
            <span className="text-2xl font-bold text-accent">
              {completedCount} / {totalCount}
            </span>
          </div>
          <div className="w-full bg-accent-subtle rounded-full h-3">
            <div
              className="bg-accent h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-text-secondary mt-2 font-body">
            {progressPercentage.toFixed(0)}% Complete
          </p>
        </div>

        {/* Laws Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laws.map((law) => (
            <Link
              key={law.id}
              to={`/law/${law.id}`}
              className="bg-surface rounded-lg shadow-sm p-6 hover:scale-105 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`px-3 py-1 rounded-full text-xs font-body font-semibold ${getCategoryColor(law.category)}`} style={{ textTransform: 'uppercase' }}>
                  {law.category}
                </div>
                {userProgress[law.id] ? (
                  <CheckCircle className="h-6 w-6 text-green-500" />
                ) : (
                  <Circle className="h-6 w-6 text-text-secondary opacity-30" />
                )}
              </div>

              <div className="flex items-start space-x-3">
                <BookOpen className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-2" style={{ fontSize: '24px', fontWeight: 600 }}>
                    {law.title}
                  </h3>
                  <p className="text-text-secondary text-sm line-clamp-3 font-body">
                    {law.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-accent-subtle">
                <span className="text-accent text-sm font-body font-semibold hover:underline" style={{ textTransform: 'uppercase' }}>
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {laws.length === 0 && (
          <div className="bg-surface rounded-lg shadow-sm p-12 text-center">
            <BookOpen className="h-16 w-16 text-text-secondary opacity-30 mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-2" style={{ fontSize: '24px', fontWeight: 600 }}>
              No UX Laws Available
            </h3>
            <p className="text-text-secondary font-body">
              The UX laws database hasn't been initialized yet. Please contact an administrator.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
