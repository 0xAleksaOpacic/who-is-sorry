import { useState, useEffect } from 'react'
import './App.css'
import HomeScreen from './components/HomeScreen'
import GameScreen from './components/GameScreen'
import RevealScreen from './components/RevealScreen'
import CompleteScreen from './components/CompleteScreen'
import { letters } from './data/letters'

function App() {
  const [gameStage, setGameStage] = useState('home') // 'home', 'playing', 'reveal', 'complete'
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [selectedLetters, setSelectedLetters] = useState([])

  const currentLetter = selectedLetters[currentLetterIndex]
  const totalLetters = selectedLetters.length || 7 // Default to 7 for display

  // Scroll to top whenever game stage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [gameStage, currentLetterIndex])

  // Function to randomly select 7 letters from all 12
  const selectRandomLetters = () => {
    const shuffled = [...letters].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 7)
  }

  const handleStartGame = () => {
    const randomLetters = selectRandomLetters()
    setSelectedLetters(randomLetters)
    setGameStage('playing')
    setCurrentLetterIndex(0)
    setScore(0)
  }

  const handleAnswer = (correct, companyName) => {
    setIsCorrect(correct)
    if (correct) {
      setScore(score + 1)
    }
    setGameStage('reveal')
  }

  const handleNext = () => {
    const nextIndex = currentLetterIndex + 1
    
    // Check if we've completed all letters
    if (nextIndex >= totalLetters) {
      setGameStage('complete')
    } else {
      setCurrentLetterIndex(nextIndex)
      setGameStage('playing')
    }
  }

  // Game Screen
  if (gameStage === 'playing') {
    return (
      <GameScreen 
        letter={currentLetter} 
        onAnswer={handleAnswer} 
        currentStep={currentLetterIndex + 1}
        totalSteps={totalLetters}
      />
    )
  }

  // Reveal Screen
  if (gameStage === 'reveal') {
    return (
      <RevealScreen 
        letter={currentLetter} 
        isCorrect={isCorrect} 
        onNext={handleNext}
        currentStep={currentLetterIndex + 1}
        totalSteps={totalLetters}
      />
    )
  }

  // Congratulations Screen
  if (gameStage === 'complete') {
    return (
      <CompleteScreen 
        score={score} 
        totalLetters={totalLetters} 
        onPlayAgain={handleStartGame} 
      />
    )
  }

  // Home Screen
  return (
    <HomeScreen 
      onStartGame={handleStartGame} 
    />
  )
}

export default App
