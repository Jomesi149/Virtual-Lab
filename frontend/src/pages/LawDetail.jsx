import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axios'
import { ArrowLeft, CheckCircle, Circle, Lightbulb, List, Brain, Trophy } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { getIndonesianLaw } from '../data/uxLawsIndo'
import SimulationComponent from '../components/SimulationComponent'

export default function LawDetail() {
  const { lawId } = useParams()
  const navigate = useNavigate()
  const [law, setLaw] = useState(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [loading, setLoading] = useState(true)
  const { isDark } = useTheme()
  const [showSimulation, setShowSimulation] = useState(false)

  useEffect(() => {
    fetchLaw()
  }, [lawId])

  const fetchLaw = async () => {
    try {
      const [lawRes, profileRes] = await Promise.all([
        axiosInstance.get(`/api/ux-laws/${lawId}`),
        axiosInstance.get('/api/user/profile')
      ])
      
      const lawData = getIndonesianLaw(lawId, lawRes.data.data)
      setLaw(lawData)
      const progress = Object.fromEntries(profileRes.data.data.progress || new Map())
      setIsCompleted(progress[lawId] || false)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const startSimulation = () => {
    setShowSimulation(true)
  }

  const handleSimulationComplete = async () => {
    try {
      await axiosInstance.put(`/api/user/progress/${lawId}`, {
        completed: true
      })
      setIsCompleted(true)
      setShowSimulation(false)
    } catch (error) {
    }
  }

  const retrySimulation = () => {
    setShowSimulation(true)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>
    )
  }

  if (!law) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-surface rounded-lg shadow-sm p-12 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-2">Hukum Tidak Ditemukan</h2>
            <p className="text-text-secondary mb-6">Hukum UX yang diminta tidak dapat ditemukan.</p>
            <button onClick={() => navigate('/dashboard')} className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors">
              Kembali ke Dashboard
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/dashboard')}
          className={`flex items-center space-x-2 mb-6 transition-colors ${
            isDark ? 'text-text-secondary hover:text-text-primary' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Kembali ke Dashboard</span>
        </button>

        <div className="bg-surface rounded-lg shadow-sm p-8 mb-6 transition-colors duration-300">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                isDark ? 'bg-accent/20 text-accent' : 'bg-primary-100 text-primary-700'
              }`}>
                {law.category}
              </div>
              <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-text-primary' : 'text-gray-900'}`}>
                {law.title}
              </h1>
              <p className={`text-xl ${isDark ? 'text-text-secondary' : 'text-gray-600'}`}>
                {law.description}
              </p>
            </div>
            
            <div className="ml-4 flex-shrink-0">
              {isCompleted ? (
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                    isDark ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'
                  }`}>
                    <Circle className={`h-8 w-8 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {!showSimulation && !isCompleted && (
            <div className={`p-6 rounded-lg border-2 ${isDark ? 'border-accent bg-accent/10' : 'border-accent bg-accent/5'}`}>
              <div className="flex items-start space-x-4">
                <Brain className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-text-primary' : 'text-gray-900'}`}>
                    Coba Simulasi Interaktif
                  </h3>
                  <p className={`mb-4 ${isDark ? 'text-text-secondary' : 'text-gray-600'}`}>
                    Pahami {law.title} melalui simulasi interaktif. 
                    Setelah menyelesaikan simulasi, hukum ini akan ditandai sebagai selesai.
                  </p>
                  <button
                    onClick={startSimulation}
                    className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors flex items-center space-x-2"
                  >
                    <Brain className="h-5 w-5" />
                    <span>Mulai Simulasi</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {isCompleted && !showSimulation && (
            <div className="p-6 rounded-lg bg-green-500/10 border-2 border-green-500">
              <div className="flex items-center space-x-4">
                <Trophy className="h-8 w-8 text-green-500" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-green-500 mb-1">
                    Selesai! 🎉
                  </h3>
                  <p className={isDark ? 'text-text-secondary' : 'text-gray-600'}>
                    Anda telah berhasil menyelesaikan simulasi untuk hukum UX ini.
                  </p>
                </div>
                <button
                  onClick={retrySimulation}
                  className="px-4 py-2 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
                >
                  Ulangi Simulasi
                </button>
              </div>
            </div>
          )}

          {showSimulation && (
            <div className={`p-6 rounded-lg border-2 ${isDark ? 'border-accent bg-background' : 'border-accent bg-white'}`}>
              <div className="mb-6">
                <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-text-primary' : 'text-gray-900'}`}>
                  🎮 Simulasi Interaktif: {law.title}
                </h3>
                <p className={`mb-4 ${isDark ? 'text-text-secondary' : 'text-gray-600'}`}>
                  Coba simulasi di bawah ini untuk memahami konsep secara langsung:
                </p>
              </div>

              <SimulationComponent lawId={lawId} />

              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleSimulationComplete}
                  className="flex-1 py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  ✅ Tandai Selesai
                </button>
                <button
                  onClick={() => setShowSimulation(false)}
                  className="flex-1 py-3 px-6 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors font-medium"
                >
                  Kembali ke Konten
                </button>
              </div>
            </div>
          )}

          {!showSimulation && (
            <>
              <div className={`mt-8 pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-text-primary' : 'text-gray-900'}`}>
                  Gambaran Umum
                </h2>
                <p className={`leading-relaxed text-lg ${isDark ? 'text-text-secondary' : 'text-gray-700'}`}>
                  {law.fullContent}
                </p>
              </div>

              {law.principles && law.principles.length > 0 && (
                <div className={`mt-8 pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center space-x-2 mb-4">
                <List className={`h-6 w-6 ${isDark ? 'text-accent' : 'text-primary-600'}`} />
                <h2 className={`text-2xl font-semibold ${isDark ? 'text-text-primary' : 'text-gray-900'}`}>
                  Prinsip Utama
                </h2>
              </div>
              <ul className="space-y-3">
                {law.principles.map((principle, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium mt-0.5 ${
                      isDark ? 'bg-accent text-white' : 'bg-primary-100 text-primary-600'
                    }`}>
                      {index + 1}
                    </div>
                    <p className={`leading-relaxed ${isDark ? 'text-text-secondary' : 'text-gray-700'}`}>
                      {principle}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {law.examples && law.examples.length > 0 && (
            <div className={`mt-8 pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className={`h-6 w-6 ${isDark ? 'text-accent' : 'text-primary-600'}`} />
                <h2 className={`text-2xl font-semibold ${isDark ? 'text-text-primary' : 'text-gray-900'}`}>
                  Contoh Dunia Nyata
                </h2>
              </div>
              <div className="grid gap-4">
                {law.examples.map((example, index) => (
                  <div key={index} className={`rounded-lg p-6 ${
                    isDark ? 'bg-background' : 'bg-gray-50'
                  }`}>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-text-primary' : 'text-gray-900'}`}>
                      {example.title}
                    </h3>
                    <p className={isDark ? 'text-text-secondary' : 'text-gray-700'}>
                      {example.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
