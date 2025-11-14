import { useState, useMemo } from 'react'

// Import letter images for background
import aviciImg from '../assets/images/letters/avici.png'
import injectiveImg from '../assets/images/letters/Injective.png'
import minaImg from '../assets/images/letters/mina.png'
import phenixImg from '../assets/images/letters/phenix.png'
import polkadotImg from '../assets/images/letters/polkadot.png'
import taikoImg from '../assets/images/letters/taiko.png'
import trustWalletImg from '../assets/images/letters/trustWallet.png'

function GameScreen({ letter, onAnswer, currentStep, totalSteps }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  // Shuffle the answers: correct + 2 decoys (only once per letter)
  const shuffledChoices = useMemo(() => {
    const allChoices = [
      { ...letter.company, isCorrect: true },
      ...letter.decoyCompanies.map(decoy => ({ ...decoy, isCorrect: false }))
    ]
    // Simple shuffle (Fisher-Yates)
    return [...allChoices].sort(() => Math.random() - 0.5)
  }, [letter.id])

  const handleChoiceClick = (choice) => {
    setSelectedAnswer(choice)
    // Wait a moment then reveal
    setTimeout(() => {
      onAnswer(choice.isCorrect, letter.company.name)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
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
        
        {/* Question - at top */}
        <h2 className="text-4xl font-black text-gray-900 text-center mb-8">
          Who wrote this apology? 🕵️
        </h2>

        {/* Mobile: Options first, then letter */}
        <div className="flex flex-col lg:hidden gap-6 mb-8">
          {/* Answer Choices - horizontal on mobile */}
          <div className="grid grid-cols-3 gap-3">
            {shuffledChoices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoiceClick(choice)}
                disabled={selectedAnswer !== null}
                className={`
                  p-3 rounded-xl border-3 font-bold text-sm
                  transition-all duration-200 hover:scale-105
                  flex flex-col items-center gap-2
                  ${selectedAnswer === choice 
                    ? 'bg-orange-500 text-white border-orange-600 scale-105' 
                    : 'bg-white text-gray-900 border-gray-300 hover:border-orange-500'}
                  ${selectedAnswer !== null && selectedAnswer !== choice ? 'opacity-50' : ''}
                `}
              >
                <img 
                  src={choice.logo} 
                  alt={choice.name}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-xs leading-tight">{choice.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: Side by side layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left: Letter Box */}
          <div className="flex-1">
            {/* Letter Box - Typewriter Style */}
            <div className="bg-amber-50 border-2 border-gray-400 rounded-lg p-10 shadow-2xl relative">
              {/* Vintage paper effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-100/20 rounded-lg pointer-events-none"></div>
              
              {/* Typewriter text */}
              <pre className="text-gray-900 text-base font-mono whitespace-pre-wrap leading-7 relative z-10" style={{ letterSpacing: '0.5px' }}>
                {Array.isArray(letter.quizText) ? letter.quizText.join('\n') : letter.quizText}
              </pre>
              
              {/* Subtle corner marks */}
              <div className="absolute top-4 right-4 text-gray-400 text-xs font-mono">/// AUTHOR UNKNOWN</div>
            </div>
          </div>

          {/* Right: Answer Choices - desktop only */}
          <div className="hidden lg:flex lg:w-96 w-full flex-col gap-4">
          {shuffledChoices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoiceClick(choice)}
              disabled={selectedAnswer !== null}
              className={`
                p-6 rounded-2xl border-4 font-bold text-xl
                transition-all duration-200 hover:scale-105
                flex flex-col items-center gap-4
                ${selectedAnswer === choice 
                  ? 'bg-orange-500 text-white border-orange-600 scale-105' 
                  : 'bg-white text-gray-900 border-gray-300 hover:border-orange-500'}
                ${selectedAnswer !== null && selectedAnswer !== choice ? 'opacity-50' : ''}
              `}
            >
              <img 
                src={choice.logo} 
                alt={choice.name}
                className="w-16 h-16 object-contain"
              />
              <span>{choice.name}</span>
            </button>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameScreen

