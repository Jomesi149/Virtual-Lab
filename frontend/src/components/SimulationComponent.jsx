import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const SimulationComponent = ({ lawId }) => {
  const { isDark } = useTheme()
  
  const simulations = {
    'aesthetic-usability-effect': <AestheticUsabilitySimulation isDark={isDark} />,
    'choice-overload': <ChoiceOverloadSimulation isDark={isDark} />,
    'chunking': <ChunkingSimulation isDark={isDark} />,
    'cognitive-bias': <CognitiveBiasSimulation isDark={isDark} />,
    'cognitive-load': <CognitiveLoadSimulation isDark={isDark} />,
    'doherty-threshold': <DohertyThresholdSimulation isDark={isDark} />,
    'fitts-law': <FittsLawSimulation isDark={isDark} />,
    'flow': <FlowSimulation isDark={isDark} />,
    'goal-gradient-effect': <GoalGradientSimulation isDark={isDark} />,
    'hicks-law': <HicksLawSimulation isDark={isDark} />,
    'jakobs-law': <JakobsLawSimulation isDark={isDark} />,
    'law-of-common-region': <CommonRegionSimulation isDark={isDark} />,
    'law-of-pragnanz': <PragnanzSimulation isDark={isDark} />,
    'law-of-similarity': <SimilaritySimulation isDark={isDark} />,
    'law-of-uniform-connectedness': <UniformConnectednessSimulation isDark={isDark} />,
    'millers-law': <MillersLawSimulation isDark={isDark} />,
    'occams-razor': <OccamsRazorSimulation isDark={isDark} />,
    'parkinsons-law': <ParkinsonsLawSimulation isDark={isDark} />,
    'peak-end-rule': <PeakEndRuleSimulation isDark={isDark} />,
    'postel-law': <PostelLawSimulation isDark={isDark} />,
  }
  
  return simulations[lawId] || <DefaultSimulation isDark={isDark} />
}

// 1. Aesthetic-Usability Effect
const AestheticUsabilitySimulation = ({ isDark }) => {
  const [selectedDesign, setSelectedDesign] = useState(null)
  const [showResult, setShowResult] = useState(false)
  
  const designs = [
    { 
      id: 'plain', 
      label: 'Desain Polos', 
      color: 'bg-gray-400',
      rating: 3
    },
    { 
      id: 'attractive', 
      label: 'Desain Menarik',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      rating: 5
    }
  ]
  
  const handleSelect = (design) => {
    setSelectedDesign(design)
    setShowResult(true)
  }
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Bandingkan Dua Desain
      </h3>
      <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Klik salah satu tombol di bawah. Mana yang terasa lebih mudah digunakan?
      </p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {designs.map(design => (
          <button
            key={design.id}
            onClick={() => handleSelect(design)}
            className={`p-8 rounded-lg ${design.color} text-white font-semibold hover:opacity-90 transition-all transform hover:scale-105`}
          >
            {design.label}
          </button>
        ))}
      </div>
      
      {showResult && selectedDesign && (
        <div className={`p-4 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-100'} border-2 border-blue-500`}>
          <p className={`font-semibold ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
            {selectedDesign.id === 'attractive' ? 
              '✨ Benar! Desain yang lebih menarik sering dipersepsikan lebih mudah digunakan, bahkan jika fungsionalitasnya sama.' :
              '🤔 Menarik! Kebanyakan pengguna memilih desain yang lebih menarik karena terlihat lebih mudah digunakan.'
            }
          </p>
        </div>
      )}
    </div>
  )
}

// 2. Choice Overload
const ChoiceOverloadSimulation = ({ isDark }) => {
  const [selectedSet, setSelectedSet] = useState(null)
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  
  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setTime(t => t + 10)
      }, 10)
    }
    return () => clearInterval(interval)
  }, [isRunning])
  
  const startSelection = (set) => {
    setSelectedSet(set)
    setTime(0)
    setIsRunning(true)
  }
  
  const makeChoice = () => {
    setIsRunning(false)
  }
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Berapa Waktu yang Dibutuhkan untuk Memilih?
      </h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => startSelection('few')}
          className={`p-6 rounded-lg border-2 ${isDark ? 'border-gray-600 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'} transition-colors`}
        >
          <div className="font-semibold mb-2">3 Pilihan Produk</div>
          <div className="text-sm">Ukuran: S, M, L</div>
        </button>
        
        <button
          onClick={() => startSelection('many')}
          className={`p-6 rounded-lg border-2 ${isDark ? 'border-gray-600 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'} transition-colors`}
        >
          <div className="font-semibold mb-2">20 Pilihan Produk</div>
          <div className="text-sm text-xs">XS, S, S+, M-, M, M+, L-, L, L+, XL, XXL...</div>
        </button>
      </div>
      
      {selectedSet && isRunning && (
        <div className={`p-4 rounded-lg ${isDark ? 'bg-yellow-900/30' : 'bg-yellow-100'} mb-4`}>
          <p className="font-semibold mb-2">Timer: {(time / 1000).toFixed(1)}s</p>
          <p className="mb-3">Pilih satu opsi (simulasi):</p>
          <button
            onClick={makeChoice}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Saya Sudah Pilih!
          </button>
        </div>
      )}
      
      {selectedSet && !isRunning && time > 0 && (
        <div className={`p-4 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-100'} border-2 border-green-500`}>
          <p className={`font-semibold ${isDark ? 'text-green-300' : 'text-green-700'}`}>
            ⏱️ Waktu keputusan: {(time / 1000).toFixed(1)} detik
          </p>
          <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {selectedSet === 'many' ? 
              'Terlalu banyak pilihan membuat keputusan lebih lama dan lebih sulit!' :
              'Pilihan yang lebih sedikit membuat keputusan lebih cepat!'}
          </p>
        </div>
      )}
    </div>
  )
}

// 3. Chunking
const ChunkingSimulation = ({ isDark }) => {
  const [remembered, setRemembered] = useState({ unchunked: 0, chunked: 0 })
  const [activeTest, setActiveTest] = useState(null)
  
  const numbers = {
    unchunked: '085712345678',
    chunked: '0857 1234 5678'
  }
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Mana yang Lebih Mudah Diingat?
      </h3>
      
      <div className="space-y-4 mb-6">
        <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} border-2 border-transparent hover:border-blue-500 cursor-pointer`}>
          <p className="text-sm mb-2">Nomor Telepon (Tanpa Pemisah):</p>
          <p className="text-2xl font-mono font-bold">{numbers.unchunked}</p>
        </div>
        
        <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} border-2 border-transparent hover:border-green-500 cursor-pointer`}>
          <p className="text-sm mb-2">Nomor Telepon (Dengan Chunk):</p>
          <p className="text-2xl font-mono font-bold">{numbers.chunked}</p>
        </div>
      </div>
      
      <div className={`p-4 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-100'} border-2 border-blue-500`}>
        <p className={`font-semibold ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
          💡 Tip: Nomor yang dipecah menjadi chunk lebih mudah diingat dan diproses oleh otak kita!
        </p>
      </div>
    </div>
  )
}

// 4. Cognitive Bias - Framing
const CognitiveBiasSimulation = ({ isDark }) => {
  const [choice, setChoice] = useState(null)
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Framing: Cara Penyampaian Mempengaruhi Persepsi
      </h3>
      <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Dua pilihan dengan informasi yang sama, tapi cara penyampaian berbeda:
      </p>
      
      <div className="space-y-4 mb-6">
        <button
          onClick={() => setChoice('positive')}
          className={`w-full p-4 rounded-lg border-2 text-left ${
            choice === 'positive' 
              ? 'border-green-500 bg-green-500/20' 
              : isDark ? 'border-gray-600 hover:border-green-500' : 'border-gray-300 hover:border-green-500'
          }`}
        >
          <div className="font-semibold text-green-600">✅ 90% Tingkat Keberhasilan</div>
          <div className="text-sm mt-1 text-gray-500">Operasi ini memiliki tingkat keberhasilan 90%</div>
        </button>
        
        <button
          onClick={() => setChoice('negative')}
          className={`w-full p-4 rounded-lg border-2 text-left ${
            choice === 'negative' 
              ? 'border-red-500 bg-red-500/20' 
              : isDark ? 'border-gray-600 hover:border-red-500' : 'border-gray-300 hover:border-red-500'
          }`}
        >
          <div className="font-semibold text-red-600">⚠️ 10% Tingkat Kegagalan</div>
          <div className="text-sm mt-1 text-gray-500">Operasi ini memiliki tingkat kegagalan 10%</div>
        </button>
      </div>
      
      {choice && (
        <div className={`p-4 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-100'} border-2 border-purple-500`}>
          <p className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
            🧠 Kedua pilihan identik (90% berhasil = 10% gagal), tapi framing positif terasa lebih menarik!
          </p>
        </div>
      )}
    </div>
  )
}

// 5. Cognitive Load
const CognitiveLoadSimulation = ({ isDark }) => {
  const [currentView, setCurrentView] = useState('complex')
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Bandingkan Cognitive Load
      </h3>
      
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setCurrentView('complex')}
          className={`px-4 py-2 rounded-lg ${currentView === 'complex' ? 'bg-red-500 text-white' : isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
        >
          UI Kompleks
        </button>
        <button
          onClick={() => setCurrentView('simple')}
          className={`px-4 py-2 rounded-lg ${currentView === 'simple' ? 'bg-green-500 text-white' : isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
        >
          UI Sederhana
        </button>
      </div>
      
      {currentView === 'complex' && (
        <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} border-2 border-red-500`}>
          <div className="text-xs space-y-1 mb-2">
            <div className="flex gap-2">
              <button className="px-2 py-1 bg-blue-500 text-white text-xs">Simpan</button>
              <button className="px-2 py-1 bg-green-500 text-white text-xs">Edit</button>
              <button className="px-2 py-1 bg-yellow-500 text-white text-xs">Hapus</button>
              <button className="px-2 py-1 bg-purple-500 text-white text-xs">Export</button>
              <button className="px-2 py-1 bg-pink-500 text-white text-xs">Share</button>
              <button className="px-2 py-1 bg-red-500 text-white text-xs">Archive</button>
            </div>
          </div>
          <input placeholder="Nama, Email, Alamat, Kota, Kode Pos, Telepon..." className="w-full p-2 text-xs border rounded" />
          <p className="text-xs mt-2 text-red-600 font-semibold">⚠️ Terlalu banyak pilihan sekaligus = Cognitive overload!</p>
        </div>
      )}
      
      {currentView === 'simple' && (
        <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} border-2 border-green-500`}>
          <input placeholder="Masukkan nama Anda" className="w-full p-3 border rounded mb-3" />
          <button className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Lanjutkan
          </button>
          <p className="text-xs mt-2 text-green-600 font-semibold">✅ Satu tugas, satu padat, satu aksi utama!</p>
        </div>
      )}
    </div>
  )
}

// 6. Doherty Threshold
const DohertyThresholdSimulation = ({ isDark }) => {
  const [loading, setLoading] = useState(false)
  const [responseTime, setResponseTime] = useState(null)
  
  const testResponse = (delay) => {
    setLoading(true)
    setResponseTime(null)
    const start = Date.now()
    
    setTimeout(() => {
      setLoading(false)
      setResponseTime(Date.now() - start)
    }, delay)
  }
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Simulasi Response Time
      </h3>
      <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Klik tombol untuk merasakan perbedaan kecepatan respons:
      </p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => testResponse(100)}
          disabled={loading}
          className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
        >
          Fast (100ms) ⚡
        </button>
        
        <button
          onClick={() => testResponse(700)}
          disabled={loading}
          className="p-4 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
        >
          Slow (700ms) 🐌
        </button>
      </div>
      
      {loading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      )}
      
      {responseTime && (
        <div className={`p-4 rounded-lg ${
          responseTime < 400 
            ? isDark ? 'bg-green-900/30 border-green-500' : 'bg-green-100 border-green-500'
            : isDark ? 'bg-red-900/30 border-red-500' : 'bg-red-100 border-red-500'
        } border-2`}>
          <p className="font-semibold">
            Response time: {responseTime}ms
          </p>
          <p className="text-sm mt-2">
            {responseTime < 400 ? '✅ Terasa instant! (Di bawah Doherty Threshold 400ms)' : '⚠️ Terasa lambat (Di atas 400ms)'}
          </p>
        </div>
      )}
    </div>
  )
}

// 7. Fitts's Law
const FittsLawSimulation = ({ isDark }) => {
  const [score, setScore] = useState({ hits: 0, misses: 0 })
  const [activeTarget, setActiveTarget] = useState(null)
  
  const targets = [
    { id: 'large', size: 'w-32 h-32', label: 'Target Besar', distance: 'left-10' },
    { id: 'small', size: 'w-12 h-12', label: 'Target Kecil', distance: 'right-10' }
  ]
  
  const handleHit = (targetId) => {
    setScore(s => ({ ...s, hits: s.hits + 1 }))
    setActiveTarget(targetId)
    setTimeout(() => setActiveTarget(null), 500)
  }
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Klik Target dengan Ukuran Berbeda
      </h3>
      <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Mana yang lebih mudah diklik? (Ukuran + Jarak = Waktu)
      </p>
      
      <div className="relative h-48 mb-6 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-around p-4">
        <button
          onClick={() => handleHit('large')}
          className={`${targets[0].size} bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all ${
            activeTarget === 'large' ? 'ring-4 ring-green-500' : ''
          }`}
        >
          Besar
        </button>
        
        <button
          onClick={() => handleHit('small')}
          className={`${targets[1].size} bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-semibold transition-all ${
            activeTarget === 'small' ? 'ring-4 ring-green-500' : ''
          }`}
        >
          Kecil
        </button>
      </div>
      
      <div className={`p-4 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-100'} border-2 border-blue-500`}>
        <p className={`font-semibold ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
          Klik: {score.hits} | 💡 Target besar lebih mudah dan cepat untuk diklik!
        </p>
      </div>
    </div>
  )
}

// 8. Flow
const FlowSimulation = ({ isDark }) => {
  const [distractions, setDistractions] = useState(true)
  const [focusTime, setFocusTime] = useState(0)
  
  useEffect(() => {
    let interval
    if (!distractions) {
      interval = setInterval(() => {
        setFocusTime(t => t + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [distractions])
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Simulasi Flow State
      </h3>
      
      <div className="mb-6">
        <button
          onClick={() => {
            setDistractions(!distractions)
            if (distractions) setFocusTime(0)
          }}
          className={`px-4 py-2 rounded-lg ${distractions ? 'bg-red-500' : 'bg-green-500'} text-white`}
        >
          {distractions ? '🔴 Mode dengan Distraksi' : '✅ Mode Fokus (Flow)'}
        </button>
      </div>
      
      {distractions && (
        <div className="space-y-2 mb-4">
          <div className="p-3 bg-yellow-500 text-white rounded animate-pulse">⚠️ Notifikasi baru!</div>
          <div className="p-3 bg-red-500 text-white rounded animate-bounce">🔔 Pesan masuk!</div>
          <div className="p-3 bg-blue-500 text-white rounded animate-pulse">📧 Email baru!</div>
        </div>
      )}
      
      {!distractions && (
        <div className={`p-6 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-100'} border-2 border-green-500`}>
          <p className="text-center text-2xl font-bold mb-2">⏱️ {focusTime}s</p>
          <p className="text-center">Waktu fokus tanpa gangguan</p>
          <div className="mt-4 text-center">
            <div className="inline-block px-4 py-2 bg-green-500 text-white rounded-full">
              🎯 Dalam Flow State
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// 9. Goal Gradient Effect
const GoalGradientSimulation = ({ isDark }) => {
  const [progress, setProgress] = useState(0)
  const [motivation, setMotivation] = useState('netral')
  
  const addProgress = () => {
    const newProgress = Math.min(progress + 20, 100)
    setProgress(newProgress)
    
    if (newProgress >= 80) setMotivation('tinggi')
    else if (newProgress >= 40) setMotivation('sedang')
    else setMotivation('rendah')
  }
  
  const reset = () => {
    setProgress(0)
    setMotivation('netral')
  }
  
  const motivationColors = {
    netral: 'bg-gray-500',
    rendah: 'bg-yellow-500',
    sedang: 'bg-orange-500',
    tinggi: 'bg-green-500 animate-pulse'
  }
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Lihat Motivasi Meningkat Saat Mendekati Tujuan
      </h3>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span>Progress:</span>
          <span className="font-bold">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <div 
            className={`h-6 ${motivationColors[motivation]} transition-all duration-500 flex items-center justify-end px-2 text-white text-sm font-semibold`}
            style={{ width: `${progress}%` }}
          >
            {progress > 10 && `${progress}%`}
          </div>
        </div>
      </div>
      
      <div className="flex gap-2 mb-4">
        <button
          onClick={addProgress}
          disabled={progress >= 100}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          Tambah Progress
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
      
      <div className={`p-4 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-100'} border-2 border-purple-500`}>
        <p className="font-semibold">
          Motivasi: {motivation === 'tinggi' ? '🔥 Sangat Tinggi!' : motivation === 'sedang' ? '😊 Sedang' : motivation === 'rendah' ? '😐 Rendah' : '😴 Netral'}
        </p>
        <p className="text-sm mt-2">
          {motivation === 'tinggi' && 'Semakin dekat dengan tujuan, semakin termotivasi untuk menyelesaikan!'}
        </p>
      </div>
    </div>
  )
}

// 10. Hick's Law
const HicksLawSimulation = ({ isDark }) => {
  const [mode, setMode] = useState(null)
  const [startTime, setStartTime] = useState(null)
  const [decisionTime, setDecisionTime] = useState(null)
  
  const startTest = (testMode) => {
    setMode(testMode)
    setStartTime(Date.now())
    setDecisionTime(null)
  }
  
  const makeDecision = () => {
    if (startTime) {
      setDecisionTime(Date.now() - startTime)
    }
  }
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Pilih Item dari Daftar
      </h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => startTest('few')}
          className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Daftar Kecil (5 item)
        </button>
        <button
          onClick={() => startTest('many')}
          className="p-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Daftar Besar (20 item)
        </button>
      </div>
      
      {mode === 'few' && !decisionTime && (
        <div className="space-y-2 mb-4">
          {['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].map((item, i) => (
            <button
              key={i}
              onClick={makeDecision}
              className={`w-full p-3 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} rounded-lg border`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      
      {mode === 'many' && !decisionTime && (
        <div className="grid grid-cols-2 gap-2 mb-4 max-h-64 overflow-y-auto">
          {Array.from({ length: 20 }, (_, i) => (
            <button
              key={i}
              onClick={makeDecision}
              className={`p-2 text-sm ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} rounded border`}
            >
              Item {i + 1}
            </button>
          ))}
        </div>
      )}
      
      {decisionTime && (
        <div className={`p-4 rounded-lg ${
          mode === 'few'
            ? isDark ? 'bg-green-900/30 border-green-500' : 'bg-green-100 border-green-500'
            : isDark ? 'bg-red-900/30 border-red-500' : 'bg-red-100 border-red-500'
        } border-2`}>
          <p className="font-semibold">⏱️ Waktu keputusan: {(decisionTime / 1000).toFixed(2)} detik</p>
          <p className="text-sm mt-2">
            {mode === 'few' 
              ? '✅ Pilihan lebih sedikit = keputusan lebih cepat!' 
              : '⚠️ Terlalu banyak pilihan = decision paralysis!'}
          </p>
          <button
            onClick={() => {
              setMode(null)
              setDecisionTime(null)
            }}
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Coba Lagi
          </button>
        </div>
      )}
    </div>
  )
}

// Simulasi lainnya dengan implementasi serupa...
const JakobsLawSimulation = ({ isDark }) => {
  const [layout, setLayout] = useState('familiar')
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Bandingkan Layout Familiar vs Experimental
      </h3>
      
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setLayout('familiar')}
          className={`px-4 py-2 rounded-lg ${layout === 'familiar' ? 'bg-green-500 text-white' : isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
        >
          Layout Familiar
        </button>
        <button
          onClick={() => setLayout('experimental')}
          className={`px-4 py-2 rounded-lg ${layout === 'experimental' ? 'bg-orange-500 text-white' : isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
        >
          Layout Experimental
        </button>
      </div>
      
      {layout === 'familiar' && (
        <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} border-2 border-green-500`}>
          <div className="flex justify-between items-center mb-4 pb-2 border-b">
            <div className="font-bold">Logo</div>
            <div className="flex gap-4">
              <button className="text-sm">Home</button>
              <button className="text-sm">About</button>
              <button className="text-sm">Contact</button>
            </div>
            <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">🛒 Cart</button>
          </div>
          <p className="text-xs text-green-600 font-semibold">✅ Layout standar - pengguna langsung paham!</p>
        </div>
      )}
      
      {layout === 'experimental' && (
        <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} border-2 border-orange-500`}>
          <div className="text-center mb-4">
            <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm mb-2">🛒 Cart</button>
            <div className="font-bold mb-2">Logo</div>
            <div className="flex justify-center gap-2">
              <button className="text-xs">Home</button>
              <button className="text-xs">About</button>
              <button className="text-xs">Contact</button>
            </div>
          </div>
          <p className="text-xs text-orange-600 font-semibold">⚠️ Layout tidak biasa - pengguna bingung!</p>
        </div>
      )}
    </div>
  )
}

const CommonRegionSimulation = ({ isDark }) => {
  const [grouped, setGrouped] = useState(false)
  
  const items = ['📧 Email', '📞 Phone', '📍 Address', '🎂 Birthday', '💼 Job', '🏢 Company']
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Pengelompokan dengan Border
      </h3>
      
      <div className="mb-6">
        <button
          onClick={() => setGrouped(!grouped)}
          className={`px-4 py-2 rounded-lg ${grouped ? 'bg-green-500' : 'bg-blue-500'} text-white`}
        >
          {grouped ? 'Dengan Border (Grouped)' : 'Tanpa Border'}
        </button>
      </div>
      
      {!grouped && (
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className={`p-3 ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
              {item}
            </div>
          ))}
        </div>
      )}
      
      {grouped && (
        <div className="space-y-4">
          <div className={`p-4 rounded-lg border-2 border-blue-500 ${isDark ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
            <h4 className="font-semibold mb-2 text-blue-600">Kontak</h4>
            <div className="space-y-1">
              <div>📧 Email</div>
              <div>📞 Phone</div>
              <div>📍 Address</div>
            </div>
          </div>
          <div className={`p-4 rounded-lg border-2 border-green-500 ${isDark ? 'bg-green-900/20' : 'bg-green-50'}`}>
            <h4 className="font-semibold mb-2 text-green-600">Personal Info</h4>
            <div className="space-y-1">
              <div>🎂 Birthday</div>
              <div>💼 Job</div>
              <div>🏢 Company</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const PragnanzSimulation = ({ isDark }) => {
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Otak Menyederhanakan Bentuk Kompleks
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
          <p className="text-sm mb-3 font-semibold text-red-500">❌ Kompleks</p>
          <div className="relative h-32 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 opacity-30">
            <div className="absolute inset-0 grid grid-cols-4 gap-1 p-1">
              {Array.from({ length: 16 }, (_, i) => (
                <div key={i} className="bg-black opacity-20"></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
          <p className="text-sm mb-3 font-semibold text-green-500">✅ Sederhana</p>
          <div className="h-32 bg-blue-500 rounded-lg flex items-center justify-center">
            <div className="text-white text-4xl">📊</div>
          </div>
        </div>
      </div>
      
      <div className={`mt-4 p-4 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-100'} border-2 border-purple-500`}>
        <p className="text-sm font-semibold">💡 Otak lebih mudah memproses bentuk sederhana!</p>
      </div>
    </div>
  )
}

const SimilaritySimulation = ({ isDark }) => {
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Elemen Serupa Dikelompokkan Bersama
      </h3>
      
      <div className="grid grid-cols-6 gap-2 mb-6">
        <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
        <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
        <div className="w-12 h-12 bg-red-500 rounded-lg"></div>
        <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
        <div className="w-12 h-12 bg-red-500 rounded-lg"></div>
        <div className="w-12 h-12 bg-red-500 rounded-lg"></div>
      </div>
      
      <div className={`p-4 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-100'} border-2 border-blue-500`}>
        <p className="text-sm font-semibold">
          👁️ Mata secara otomatis mengelompokkan lingkaran biru dan kotak merah sebagai grup terpisah!
        </p>
      </div>
    </div>
  )
}

const UniformConnectednessSimulation = ({ isDark }) => {
  const [connected, setConnected] = useState(false)
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Koneksi Visual Membuat Relasi
      </h3>
      
      <button
        onClick={() => setConnected(!connected)}
        className={`mb-6 px-4 py-2 rounded-lg ${connected ? 'bg-green-500' : 'bg-blue-500'} text-white`}
      >
        {connected ? 'Dengan Garis Penghubung' : 'Tanpa Garis'}
      </button>
      
      <div className="relative">
        <div className="flex justify-around items-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
          <div className="w-16 h-16 bg-green-500 rounded-full"></div>
          <div className="w-16 h-16 bg-red-500 rounded-full"></div>
        </div>
        
        {connected && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ top: '50%' }}>
            <line x1="15%" y1="0" x2="50%" y2="0" stroke="#3B82F6" strokeWidth="3" />
            <line x1="50%" y1="0" x2="85%" y2="0" stroke="#3B82F6" strokeWidth="3" />
          </svg>
        )}
      </div>
      
      <div className={`mt-6 p-4 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-100'} border-2 border-blue-500`}>
        <p className="text-sm font-semibold">
          {connected ? '✅ Garis membuat elemen terasa terhubung!' : '❌ Tanpa garis, elemen terasa terpisah'}
        </p>
      </div>
    </div>
  )
}

const MillersLawSimulation = ({ isDark }) => {
  const [showAll, setShowAll] = useState(false)
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11', 'Item 12']
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Memori Kerja: 7 ± 2 Item
      </h3>
      
      <div className="mb-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className={`px-4 py-2 rounded-lg ${showAll ? 'bg-red-500' : 'bg-green-500'} text-white`}
        >
          {showAll ? '12 Items (Terlalu Banyak!)' : '7 Items (Ideal)'}
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        {items.slice(0, showAll ? 12 : 7).map((item, i) => (
          <div key={i} className={`p-3 text-center rounded ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
            {item}
          </div>
        ))}
      </div>
      
      <div className={`mt-4 p-4 rounded-lg ${
        showAll 
          ? isDark ? 'bg-red-900/30 border-red-500' : 'bg-red-100 border-red-500'
          : isDark ? 'bg-green-900/30 border-green-500' : 'bg-green-100 border-green-500'
      } border-2`}>
        <p className="text-sm font-semibold">
          {showAll ? '⚠️ Lebih dari 7 item sulit diingat!' : '✅ 5-7 item mudah diproses oleh memori kerja!'}
        </p>
      </div>
    </div>
  )
}

const OccamsRazorSimulation = ({ isDark }) => {
  const [version, setVersion] = useState('complex')
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Solusi Sederhana vs Kompleks
      </h3>
      
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setVersion('complex')}
          className={`px-4 py-2 rounded-lg ${version === 'complex' ? 'bg-red-500 text-white' : isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
        >
          Kompleks
        </button>
        <button
          onClick={() => setVersion('simple')}
          className={`px-4 py-2 rounded-lg ${version === 'simple' ? 'bg-green-500 text-white' : isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
        >
          Sederhana
        </button>
      </div>
      
      {version === 'complex' && (
        <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} border-2 border-red-500`}>
          <div className="space-y-2 text-xs">
            <input placeholder="Field 1" className="w-full p-2 border rounded" />
            <input placeholder="Field 2" className="w-full p-2 border rounded" />
            <input placeholder="Field 3" className="w-full p-2 border rounded" />
            <select className="w-full p-2 border rounded">
              <option>Pilih opsi A</option>
              <option>Pilih opsi B</option>
              <option>Pilih opsi C</option>
            </select>
            <div className="flex gap-2">
              <button className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Submit</button>
              <button className="px-2 py-1 bg-gray-500 text-white rounded text-xs">Cancel</button>
              <button className="px-2 py-1 bg-yellow-500 text-white rounded text-xs">Reset</button>
              <button className="px-2 py-1 bg-green-500 text-white rounded text-xs">Save</button>
            </div>
          </div>
        </div>
      )}
      
      {version === 'simple' && (
        <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} border-2 border-green-500`}>
          <input placeholder="Masukkan email Anda" className="w-full p-3 border rounded mb-3" />
          <button className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg">
            Mulai
          </button>
        </div>
      )}
    </div>
  )
}

const ParkinsonsLawSimulation = ({ isDark }) => {
  const [hasDeadline, setHasDeadline] = useState(false)
  const [timeLeft, setTimeLeft] = useState(10)
  
  useEffect(() => {
    let interval
    if (hasDeadline && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => t - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [hasDeadline, timeLeft])
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Pengaruh Deadline pada Produktivitas
      </h3>
      
      <div className="mb-6">
        <button
          onClick={() => {
            setHasDeadline(!hasDeadline)
            setTimeLeft(10)
          }}
          className={`px-4 py-2 rounded-lg ${hasDeadline ? 'bg-orange-500' : 'bg-gray-500'} text-white`}
        >
          {hasDeadline ? '⏰ Dengan Deadline' : '∞ Tanpa Deadline'}
        </button>
      </div>
      
      {!hasDeadline && (
        <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
          <p className="text-center text-gray-400 text-lg">😴 Santai... tidak ada deadline...</p>
          <p className="text-center text-sm mt-2">Pekerjaan cenderung melebar tanpa batas waktu</p>
        </div>
      )}
      
      {hasDeadline && (
        <div className={`p-6 rounded-lg ${
          timeLeft > 5 
            ? isDark ? 'bg-yellow-900/30' : 'bg-yellow-100'
            : isDark ? 'bg-red-900/30' : 'bg-red-100'
        }`}>
          <p className="text-center text-4xl font-bold mb-2">
            {timeLeft > 0 ? `⏱️ ${timeLeft}s` : '⚠️ DEADLINE!'}
          </p>
          <p className="text-center font-semibold">
            {timeLeft > 0 ? '🏃 Fokus meningkat!' : '✅ Tugas selesai tepat waktu!'}
          </p>
        </div>
      )}
    </div>
  )
}

const PeakEndRuleSimulation = ({ isDark }) => {
  const [experience, setExperience] = useState([])
  const [showSummary, setShowSummary] = useState(false)
  
  const addMoment = (type) => {
    setExperience([...experience, type])
  }
  
  const finish = () => {
    setShowSummary(true)
  }
  
  const reset = () => {
    setExperience([])
    setShowSummary(false)
  }
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Simulasi Pengalaman Pengguna
      </h3>
      
      {!showSummary && (
        <>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Tambahkan momen dalam pengalaman:
          </p>
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => addMoment('good')}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              😊 Baik
            </button>
            <button
              onClick={() => addMoment('neutral')}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              😐 Netral
            </button>
            <button
              onClick={() => addMoment('bad')}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              😞 Buruk
            </button>
          </div>
          
          <div className="flex gap-1 mb-4 min-h-[40px]">
            {experience.map((type, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded flex items-center justify-center text-lg ${
                  type === 'good' ? 'bg-green-500' : type === 'bad' ? 'bg-red-500' : 'bg-gray-500'
                }`}
              >
                {type === 'good' ? '😊' : type === 'bad' ? '😞' : '😐'}
              </div>
            ))}
          </div>
          
          {experience.length > 0 && (
            <button
              onClick={finish}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Selesai & Lihat Ingatan
            </button>
          )}
        </>
      )}
      
      {showSummary && (
        <div>
          <div className={`p-4 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-100'} border-2 border-purple-500 mb-4`}>
            <p className="font-semibold mb-2">Yang Diingat Pengguna:</p>
            <div className="flex gap-2">
              <div className="text-2xl">🏔️ Peak: {experience.includes('bad') ? '😞' : '😊'}</div>
              <div className="text-2xl">🏁 End: {experience[experience.length - 1] === 'good' ? '😊' : experience[experience.length - 1] === 'bad' ? '😞' : '😐'}</div>
            </div>
            <p className="text-sm mt-2">
              💡 Pengguna mengingat momen paling intens dan akhir, bukan rata-rata keseluruhan!
            </p>
          </div>
          <button
            onClick={reset}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Coba Lagi
          </button>
        </div>
      )}
    </div>
  )
}

const PostelLawSimulation = ({ isDark }) => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  
  const handleSubmit = () => {
    // Terima berbagai format input, kembalikan format standar
    const cleaned = input.replace(/\D/g, '')
    const formatted = cleaned.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3')
    setOutput(formatted)
  }
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Liberal dalam Input, Konservatif dalam Output
      </h3>
      <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Coba masukkan nomor telepon dalam format apa pun:
      </p>
      
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="misal: 081234567890 atau 0812-3456-7890"
        className={`w-full p-3 border-2 rounded-lg mb-3 ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
      />
      
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg mb-4"
      >
        Format Nomor
      </button>
      
      {output && (
        <div className={`p-4 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-100'} border-2 border-green-500`}>
          <p className="font-semibold mb-2">Output Standar:</p>
          <p className="text-xl font-mono">{output}</p>
          <p className="text-sm mt-2">✅ Menerima berbagai format input, mengembalikan format konsisten!</p>
        </div>
      )}
    </div>
  )
}

const DefaultSimulation = ({ isDark }) => {
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
        Simulasi interaktif sedang dalam pengembangan untuk hukum UX ini.
      </p>
    </div>
  )
}

export default SimulationComponent
