import AnimatExec from './components/Animation/AnimatExec'
import ShowResult from './components/ShowResult/ShowResult'
import PlayButton from './components/PlayButton/PlayButton'
import GameStories from './components/GameStories/GameStories'
import Betting from './components/Betting/Betting'
import BettingHistory from './components/Betting/BettingHistory'
import Balance from './ui/Balance'



function App() {
  return (
    <div className="bg-linear-to-br from-purple-300 to-yellow-400">
    <div className="container m-auto p-[0_10px] ">
      <div className="h-screen flex flex-col justify-center items-center gap-y-[40px] relative ">
        <Balance />
        <GameStories />
        <Betting />
        <BettingHistory />
        <AnimatExec />
        <ShowResult />
        <PlayButton />        
      </div>
    </div>
    </div>
  )
}

export default App
