import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axiosInstance from '../utils/axios'
import { BookOpen, CheckCircle, Circle } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { getIndonesianLaw, categoryTranslations } from '../data/uxLawsIndo'

export default function Dashboard() {
  const [laws, setLaws] = useState([])
  const [userProgress, setUserProgress] = useState({})
  const [loading, setLoading] = useState(true)
  const { isDark } = useTheme()
  const location = useLocation()

  useEffect(() => {
    fetchData()
  }, [location])

  const fetchData = async () => {
    try {
      console.log('Fetching dashboard data...')
      const [lawsRes, profileRes] = await Promise.all([
        axiosInstance.get('/api/ux-laws'),
        axiosInstance.get('/api/user/profile')
      ])
      
      console.log('Profile data:', profileRes.data.data)
      console.log('Progress data:', profileRes.data.data.progress)
      
      // Apply Indonesian translations
      const translatedLaws = lawsRes.data.data.map(law => 
        getIndonesianLaw(law.id, law)
      )
      
      setLaws(translatedLaws)
      
      // Handle progress - ensure it's an object
      let progressObj = profileRes.data.data.progress || {}
      
      // If progress is a Map, convert to object
      if (progressObj instanceof Map) {
        progressObj = Object.fromEntries(progressObj)
      }
      // If progress is already an object, use as is
      else if (typeof progressObj === 'object' && !Array.isArray(progressObj)) {
        progressObj = { ...progressObj }
      }
      
      console.log('Progress object:', progressObj)
      setUserProgress(progressObj)
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
            Dashboard UX Laws
          </h1>
          <p className={`font-body ${isDark ? 'text-text-secondary' : 'text-gray-700'}`}>
            Jelajahi dan pelajari prinsip-prinsip dasar desain pengalaman pengguna
          </p>
        </div>

        {/* Progress Card */}
        <div className="bg-surface rounded-lg shadow-sm p-6 mb-8 transition-colors duration-300">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-heading font-semibold text-text-primary" style={{ fontSize: '36px', fontWeight: 500 }}>
              Progres Anda
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
            {progressPercentage.toFixed(0)}% Selesai
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
                  {categoryTranslations[law.category] || law.category}
                </div>
                {userProgress[law.id] ? (
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-md">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                ) : (
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                    isDark ? 'border-gray-600 bg-gray-700/50' : 'border-gray-300 bg-gray-100'
                  }`}>
                    <Circle className="h-5 w-5 text-text-secondary opacity-30" />
                  </div>
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
                  Pelajari lebih lanjut →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {laws.length === 0 && (
          <div className="bg-surface rounded-lg shadow-sm p-12 text-center">
            <BookOpen className="h-16 w-16 text-text-secondary opacity-30 mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-2" style={{ fontSize: '24px', fontWeight: 600 }}>
              Tidak Ada UX Laws Tersedia
            </h3>
            <p className="text-text-secondary font-body">
              Database UX laws belum diinisialisasi. Silakan hubungi administrator.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
