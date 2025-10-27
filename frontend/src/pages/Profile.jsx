import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import { User, Mail, Award, BookOpen } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Profile() {
  const { user } = useAuth()
  const { isDark } = useTheme()
  const [profile, setProfile] = useState(null)
  const [laws, setLaws] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      const [profileRes, lawsRes] = await Promise.all([
        axios.get('/api/user/profile'),
        axios.get('/api/ux-laws')
      ])
      
      setProfile(profileRes.data.data)
      setLaws(lawsRes.data.data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching profile:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>
    )
  }

  const completedCount = profile?.completedLaws?.length || 0
  const totalCount = laws.length
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  return (
    <div className="min-h-screen bg-background py-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-accent mb-8" style={{ fontSize: '56px', fontWeight: 700 }}>My Profile</h1>

        {/* Profile Info Card */}
        <div className="bg-surface rounded-lg shadow-sm p-8 mb-8 transition-colors duration-300">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-white" />
            </div>
            <div>
              <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {user?.name}
              </h2>
              <div className="flex items-center space-x-2 text-gray-600 mt-1">
                <Mail className="h-4 w-4" />
                <span>{user?.email}</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className={`h-5 w-5 ${isDark ? 'text-white' : 'text-accent'}`} />
              <div>
                <p className={`text-sm font-body ${isDark ? 'text-white' : 'text-gray-600'}`}>Email</p>
                <p className={`font-semibold font-body ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {user?.email}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Award className={`h-5 w-5 ${isDark ? 'text-white' : 'text-accent'}`} />
              <div>
                <p className={`text-sm font-body ${isDark ? 'text-white' : 'text-gray-600'}`}>Completed Laws</p>
                <p className={`font-semibold font-body ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {completedCount} Laws
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Details */}
        <div className="bg-surface rounded-lg shadow-sm p-8 transition-colors duration-300">
          <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Learning Progress
          </h3>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Overall Completion</span>
              <span className="text-sm font-medium text-primary-600">
                {completedCount} / {totalCount} laws
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-primary-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {completedCount > 0 ? (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Completed Laws:</h4>
              <div className="space-y-2">
                {profile.completedLaws.map((lawId) => {
                  const law = laws.find(l => l.id === lawId)
                  return law ? (
                    <div key={lawId} className="flex items-center space-x-2 text-gray-600">
                      <Award className="h-4 w-4 text-green-500" />
                      <span>{law.title}</span>
                    </div>
                  ) : null
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No completed laws yet. Start learning!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
