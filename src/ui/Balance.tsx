import useAppDispatch from "../hooks/useAppDispatch"
import useAppSelector from "../hooks/useAppSelector"
import { calculateWin, topUpBalance } from "../slices/balance.slice"
import { calculateBet } from "../slices/betting.slice"

const Balance = () => {
  const dispatch = useAppDispatch()
  const { balance } = useAppSelector(state => state)
  const { betHistory } = useAppSelector(state => state.betting)
  const wonBets = betHistory.filter(item => !item.isCalculated && item.outcome === "win")

  wonBets.forEach(item => dispatch(calculateWin(item.amount)))
  dispatch(calculateBet())

  return (
    <div className={`
      absolute mr-[40px]  right-0 top-[20px] 
      hover:[&>button]:translate-x-[95%] 
      hover:[&>button]:opacity-[1] 
    `}>

      <div className={`self-end
       p-[15px_20px] rounded-[10px] 
      bg-linear-to-br to-[rgba(91,209,91,.3)] transition duration-[1s] 
      shadow-xl  ${balance.canSpendStatus ? "" : "shadow-amber-600"}
      `}>
        {balance.value} $
      </div>
      <button className={`absolute top-[20%] h-[30px] left-[50%] 
        translate-x-[-10px] flex items-center justify-center text-[18px]  transition duration-[1s]
        w-[30px] rounded-[50%] bg-[lime] opacity-0 text-shadow-indigo-100`}

        onClick={() => {
          dispatch(topUpBalance())
          }}>+</button>
    </div>
  )
}

export default Balance