import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ArrowLeft, CheckCircle, Circle, Lightbulb, List } from 'lucide-react'

export default function LawDetail() {
  const { lawId } = useParams()
  const navigate = useNavigate()
  const [law, setLaw] = useState(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLaw()
  }, [lawId])

  const fetchLaw = async () => {
    try {
      const [lawRes, profileRes] = await Promise.all([
        axios.get(`/api/ux-laws/${lawId}`),
        axios.get('/api/user/profile')
      ])
      
      setLaw(lawRes.data.data)
      const progress = Object.fromEntries(profileRes.data.data.progress || new Map())
      setIsCompleted(progress[lawId] || false)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching law:', error)
      setLoading(false)
    }
  }

  const toggleCompletion = async () => {
    try {
      await axios.put(`/api/user/progress/${lawId}`, {
        completed: !isCompleted
      })
      setIsCompleted(!isCompleted)
    } catch (error) {
      console.error('Error updating progress:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!law) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Law Not Found</h2>
            <p className="text-gray-600 mb-6">The requested UX law could not be found.</p>
            <button onClick={() => navigate('/dashboard')} className="btn-primary">
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Dashboard</span>
        </button>

        {/* Main Content Card */}
        <div className="card p-8 mb-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-3">
                {law.category}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{law.title}</h1>
              <p className="text-xl text-gray-600">{law.description}</p>
            </div>
          </div>

          {/* Mark as Complete Button */}
          <button
            onClick={toggleCompletion}
            className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-colors ${
              isCompleted
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="h-5 w-5" />
                <span>Completed</span>
              </>
            ) : (
              <>
                <Circle className="h-5 w-5" />
                <span>Mark as Complete</span>
              </>
            )}
          </button>

          {/* Full Content */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{law.fullContent}</p>
          </div>

          {/* Principles */}
          {law.principles && law.principles.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <List className="h-6 w-6 text-primary-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Key Principles</h2>
              </div>
              <ul className="space-y-3">
                {law.principles.map((principle, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{principle}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Examples */}
          {law.examples && law.examples.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="h-6 w-6 text-primary-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Real-World Examples</h2>
              </div>
              <div className="grid gap-4">
                {law.examples.map((example, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {example.title}
                    </h3>
                    <p className="text-gray-700">{example.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
