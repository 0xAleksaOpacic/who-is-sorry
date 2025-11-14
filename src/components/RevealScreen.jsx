import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

// Import letter images for background
import aviciImg from '../assets/images/letters/avici.png'
import injectiveImg from '../assets/images/letters/Injective.png'
import minaImg from '../assets/images/letters/mina.png'
import phenixImg from '../assets/images/letters/phenix.png'
import polkadotImg from '../assets/images/letters/polkadot.png'
import taikoImg from '../assets/images/letters/taiko.png'
import trustWalletImg from '../assets/images/letters/trustWallet.png'

function RevealScreen({ letter, isCorrect, onNext, currentStep, totalSteps }) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle ESC key to close full screen
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsFullScreen(false)
      }
    }
    if (isFullScreen) {
      window.addEventListener('keydown', handleEsc)
      return () => window.removeEventListener('keydown', handleEsc)
    }
  }, [isFullScreen])
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Confetti celebration for correct answers */}
      {isCorrect && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          recycle={false}
          gravity={0.3}
          confettiSource={{
            x: 0,
            y: windowSize.height,
            w: windowSize.width,
            h: 0,
          }}
        />
      )}
      
      {/* Colored overlay effect */}
      <div className={`absolute inset-0 ${isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'} animate-pulse pointer-events-none`}></div>
      
      {/* Blurred letter images in background - more blur during game */}
      <img src={minaImg} alt="" className="absolute top-10 left-10 w-64 h-80 object-cover rounded-2xl opacity-20 blur-[4px] rotate-12" />
      <img src={taikoImg} alt="" className="absolute bottom-32 right-10 w-52 h-68 object-cover rounded-2xl opacity-15 blur-[4px] rotate-6" />
      <img src={polkadotImg} alt="" className="absolute top-20 right-20 w-56 h-72 object-cover rounded-2xl opacity-15 blur-[4px] -rotate-6 hidden md:block" />
      <img src={injectiveImg} alt="" className="absolute bottom-20 left-20 w-60 h-76 object-cover rounded-2xl opacity-20 blur-[4px] -rotate-12 hidden md:block" />
      <img src={aviciImg} alt="" className="absolute top-1/2 left-1/4 w-48 h-64 object-cover rounded-2xl opacity-15 blur-[4px] rotate-3 hidden md:block" />
      <img src={trustWalletImg} alt="" className="absolute top-1/3 right-1/3 w-52 h-68 object-cover rounded-2xl opacity-15 blur-[4px] -rotate-3 hidden lg:block" />
      <img src={phenixImg} alt="" className="absolute bottom-1/4 left-1/2 w-56 h-72 object-cover rounded-2xl opacity-15 blur-[4px] rotate-6 hidden lg:block" />
      
      <div className="max-w-7xl w-full relative z-10">
        {/* Step Counter */}
        <p className="text-center text-lg font-bold text-gray-500 mb-3">
          #{currentStep} of {totalSteps}
        </p>
        
        {/* Feedback - compact and on one line */}
        <div className="text-center mb-8">
          <h2 className={`text-4xl font-black ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? '✅ Correct!' : '❌ Wrong!'} It was <span className="text-orange-500">{letter.company.name}</span>
          </h2>
        </div>

        {/* Two column layout on desktop */}
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          {/* Left: Original X Post Image - Clickable for full screen */}
          <div 
            className="flex-1 bg-gray-50 rounded-3xl p-6 shadow-xl cursor-pointer hover:bg-gray-100 transition-colors group"
            onClick={() => setIsFullScreen(true)}
          >
            <img 
              src={letter.revealImage} 
              alt={`${letter.company.name} apology letter`}
              className="w-full rounded-2xl object-contain max-h-[60vh]"
            />
            <p className="text-center text-sm text-gray-500 mt-3 group-hover:text-gray-700">
              Click to view full screen 🔍
            </p>
          </div>

          {/* Right: Links and Next Button */}
          <div className="flex flex-col gap-6 lg:w-96 w-full justify-center">
            {/* Links */}
            <div className="flex flex-col gap-4">
              <a
                href={letter.tweetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-100 text-gray-900 border-2 border-gray-300 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors text-center"
              >
                🔗 View on X
              </a>
              <a
                href={letter.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-100 text-gray-900 border-2 border-gray-300 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors text-center"
              >
                🌐 Visit Project
              </a>
            </div>

            {/* Next Button */}
            <button
              onClick={onNext}
              className="px-12 py-6 bg-orange-500 text-white rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition-all duration-200 hover:bg-orange-600"
            >
              Next Letter →
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {isFullScreen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsFullScreen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsFullScreen(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full text-2xl font-bold backdrop-blur-sm transition-colors z-10"
            aria-label="Close full screen"
          >
            ✕
          </button>

          {/* Full Screen Image */}
          <img 
            src={letter.revealImage} 
            alt={`${letter.company.name} apology letter`}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Instructions */}
          <p className="absolute bottom-6 text-white/70 text-sm">
            Press ESC or click outside to close
          </p>
        </div>
      )}
    </div>
  )
}

export default RevealScreen

