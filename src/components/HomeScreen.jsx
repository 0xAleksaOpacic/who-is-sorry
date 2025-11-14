// Import letter images for background
import minaImg from '../assets/images/letters/mina.png'
import taikoImg from '../assets/images/letters/taiko.png'
import polkadotImg from '../assets/images/letters/polkadot.png'
import injectiveImg from '../assets/images/letters/Injective.png'
import aviciImg from '../assets/images/letters/avici.png'
import trustWalletImg from '../assets/images/letters/trustWallet.png'
import phenixImg from '../assets/images/letters/phenix.png'

function HomeScreen({ onStartGame }) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Blurred letter images in background - only 2 on mobile */}
      <img src={minaImg} alt="" className="absolute top-10 left-10 w-64 h-80 object-cover rounded-2xl opacity-30 blur-[2px] rotate-12" />
      <img src={taikoImg} alt="" className="absolute bottom-32 right-10 w-52 h-68 object-cover rounded-2xl opacity-25 blur-[2px] rotate-6" />
      <img src={polkadotImg} alt="" className="absolute top-20 right-20 w-56 h-72 object-cover rounded-2xl opacity-25 blur-[2px] -rotate-6 hidden md:block" />
      <img src={injectiveImg} alt="" className="absolute bottom-20 left-20 w-60 h-76 object-cover rounded-2xl opacity-30 blur-[2px] -rotate-12 hidden md:block" />
      <img src={aviciImg} alt="" className="absolute top-1/2 left-1/4 w-48 h-64 object-cover rounded-2xl opacity-20 blur-[2px] rotate-3 hidden md:block" />
      <img src={trustWalletImg} alt="" className="absolute top-1/3 right-1/3 w-52 h-68 object-cover rounded-2xl opacity-20 blur-[2px] -rotate-3 hidden lg:block" />
      <img src={phenixImg} alt="" className="absolute bottom-1/4 left-1/2 w-56 h-72 object-cover rounded-2xl opacity-20 blur-[2px] rotate-6 hidden lg:block" />
      
      <div className="text-center max-w-2xl flex-grow flex items-center justify-center relative z-10">
        <div>
          {/* Title */}
          <h1 className="text-7xl font-black text-gray-900 mb-4 drop-shadow-sm">
            Who's Sorry? 🕵️
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl text-gray-700 font-bold mb-8">
            The "We're Sorry" Apology Letter Game
          </p>

          {/* Description */}
          <div className="bg-gray-100/80 backdrop-blur-sm rounded-3xl p-8 mb-8 border-4 border-gray-200">
            <p className="text-xl text-gray-700 font-semibold leading-relaxed">
              Web3 companies are joining the "We're Sorry" meme trend. 
              <br />
              Can you guess which company wrote each apology letter?
            </p>
          </div>

          {/* Play Button */}
          <button 
            onClick={onStartGame}
            className="px-12 py-6 bg-orange-500 text-white rounded-full text-3xl font-black shadow-2xl hover:scale-110 hover:rotate-2 transition-all duration-200 hover:bg-orange-600"
          >
            START GAME! 🎮
          </button>

          {/* Footer hint */}
          <p className="mt-8 text-gray-500 text-sm font-medium">
            7 randomized letters • Multiple choice
          </p>
        </div>
      </div>

      {/* Made by - at bottom */}
      <footer className="pb-6 relative z-10">
        <p className="text-gray-400 text-sm">
          Made with ❤️ by 0xAleksaOpacic
        </p>
      </footer>
    </div>
  )
}

export default HomeScreen

