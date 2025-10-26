import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BookOpen, CheckCircle, Circle } from 'lucide-react'

export default function Dashboard() {
  const [laws, setLaws] = useState([])
  const [userProgress, setUserProgress] = useState({})
  const [loading, setLoading] = useState(true)

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
      cognitive: 'bg-purple-100 text-purple-700',
      perception: 'bg-blue-100 text-blue-700',
      interaction: 'bg-green-100 text-green-700',
      behavior: 'bg-orange-100 text-orange-700'
    }
    return colors[category] || 'bg-gray-100 text-gray-700'
  }

  const completedCount = Object.values(userProgress).filter(Boolean).length
  const totalCount = laws.length
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">UX Laws Dashboard</h1>
          <p className="text-gray-600">Explore and learn fundamental principles of user experience design</p>
        </div>

        {/* Progress Card */}
        <div className="card p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Your Progress</h2>
            <span className="text-2xl font-bold text-primary-600">
              {completedCount} / {totalCount}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-primary-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {progressPercentage.toFixed(0)}% Complete
          </p>
        </div>

        {/* Laws Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laws.map((law) => (
            <Link
              key={law.id}
              to={`/law/${law.id}`}
              className="card p-6 hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(law.category)}`}>
                  {law.category}
                </div>
                {userProgress[law.id] ? (
                  <CheckCircle className="h-6 w-6 text-green-500" />
                ) : (
                  <Circle className="h-6 w-6 text-gray-300" />
                )}
              </div>

              <div className="flex items-start space-x-3">
                <BookOpen className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {law.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {law.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-primary-600 text-sm font-medium hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {laws.length === 0 && (
          <div className="card p-12 text-center">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No UX Laws Available</h3>
            <p className="text-gray-600">
              The UX laws database hasn't been initialized yet. Please contact an administrator.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
