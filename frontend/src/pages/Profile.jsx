import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import { User, Mail, Award, BookOpen } from 'lucide-react'

export default function Profile() {
  const { user } = useAuth()
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
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  const completedCount = profile?.completedLaws?.length || 0
  const totalCount = laws.length
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

        {/* Profile Info Card */}
        <div className="card p-8 mb-6">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
              <div className="flex items-center space-x-2 text-gray-600 mt-1">
                <Mail className="h-4 w-4" />
                <span>{user?.email}</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed Laws</p>
                <p className="text-2xl font-bold text-gray-900">{completedCount}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Overall Progress</p>
                <p className="text-2xl font-bold text-gray-900">{progressPercentage.toFixed(0)}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Details */}
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Progress</h3>
          
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
