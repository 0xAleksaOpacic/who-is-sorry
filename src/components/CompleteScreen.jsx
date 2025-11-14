// Import letter images for background
import minaImg from '../assets/images/letters/mina.png'
import taikoImg from '../assets/images/letters/taiko.png'
import polkadotImg from '../assets/images/letters/polkadot.png'
import injectiveImg from '../assets/images/letters/Injective.png'

function CompleteScreen({ score, totalLetters, onPlayAgain }) {
  const shareScore = () => {
    const text = `I scored ${score}/${totalLetters} on Who's Sorry! 🎉 Can you beat my score? 🕵️`
    const url = encodeURIComponent(import.meta.env.VITE_APP_URL)
    const tweet = encodeURIComponent(text)
    window.open(`https://twitter.com/intent/tweet?text=${tweet}&url=${url}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 md:p-6 relative overflow-hidden">
      {/* Blurred letter images in background - only 2 on mobile */}
      <img src={minaImg} alt="" className="absolute top-10 left-10 w-64 h-80 object-cover rounded-2xl opacity-30 blur-[2px] rotate-12" />
      <img src={taikoImg} alt="" className="absolute bottom-32 right-10 w-52 h-68 object-cover rounded-2xl opacity-25 blur-[2px] rotate-6" />
      <img src={polkadotImg} alt="" className="absolute top-20 right-20 w-56 h-72 object-cover rounded-2xl opacity-25 blur-[2px] -rotate-6 hidden md:block" />
      <img src={injectiveImg} alt="" className="absolute bottom-20 left-20 w-60 h-76 object-cover rounded-2xl opacity-30 blur-[2px] -rotate-12 hidden md:block" />
      
      <div className="text-center max-w-2xl w-full flex-grow flex items-center justify-center relative z-10">
        <div className="w-full">
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-4 md:mb-6">
            🎉 Congratulations! 🎉
          </h1>
          
          <div className="bg-orange-100 rounded-2xl md:rounded-3xl p-6 md:p-10 mb-6 md:mb-8 border-2 md:border-4 border-orange-300">
            <p className="text-5xl md:text-6xl font-black text-orange-600 mb-3 md:mb-4">
              {score} / {totalLetters}
            </p>
            <p className="text-lg md:text-2xl text-gray-700 font-bold leading-tight px-2">
              {score === totalLetters ? "Perfect Score! You're a Web3 master! 🏆" : 
               score >= totalLetters * 0.7 ? "Great job! You know your Web3! 🌟" :
               score >= totalLetters * 0.5 ? "Not bad! Keep practicing! 💪" :
               "Better luck next time! Give it another try! 🎯"}
            </p>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col items-center gap-4 w-full">
            <button 
              onClick={onPlayAgain}
              className="w-full md:w-auto px-8 md:px-12 py-4 md:py-6 bg-orange-500 text-white rounded-full text-2xl md:text-3xl font-black shadow-2xl hover:scale-105 md:hover:scale-110 hover:rotate-1 md:hover:rotate-2 transition-all duration-200 hover:bg-orange-600"
            >
              PLAY AGAIN! 🎮
            </button>

            {/* Share Score Button - under Play Again */}
            <button
              onClick={shareScore}
              className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-gray-100 text-gray-900 border-2 border-gray-300 rounded-full text-lg md:text-xl font-bold hover:bg-gray-200 transition-all duration-200"
            >
              Share Score on X 🔗
            </button>
          </div>
        </div>
      </div>

      {/* Made by - at bottom */}
      <footer className="pb-4 md:pb-6 relative z-10">
        <p className="text-gray-400 text-sm">
          Made with ❤️ by 0xAleksaOpacic
        </p>
      </footer>
    </div>
  )
}

export default CompleteScreen

