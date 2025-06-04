import useAppSelector from "../../hooks/useAppSelector"
import { smallPointSize } from "../../shared/Point/consts"
import { fillByPoints } from "../../shared/Point/function"
import { colorsFaceOfCube, pointsPositionOnFaceOfCube } from "../Cube/face/styles"

const BettingHistory = () => {
   const { betHistory: historyOfBet } = useAppSelector(state => state.betting)

   return (
      <div className={`
         absolute  w-1/5 h-[490px] top-[30%] left-[15px]  flex flex-col items-center
         gap-y-[25px] p-[10px] overflow-y-scroll 
         snap-proximity
         ` }>
         {
            [...historyOfBet].reverse().map(item => {
               return (
                  <div className={`
                     border-2 flex   justify-between flex-col snap-end items-center
                     w-[90%]  rounded-3xl p-5 bg-[rgba(0,0,0,.05)] 
                     ${item.outcome === "win" ? "border-lime-300" : "border-[coral]"} 
                  `}>

                     <div className={`
                     ${colorsFaceOfCube[item.value]}
                     p-[5px] border-2 rounded-[10px] w-[40px] h-[40px] 
                     ${pointsPositionOnFaceOfCube[item.value]} 
                      
                     `}>
                        {
                           fillByPoints(item.value, smallPointSize)
                        }
                     </div>

                     <div className="mt-[10px] flex justify-between w-full items-center">
                        <div className="">
                           <span className="text-3xl">{item.amount}</span>
                           <span> x5</span>
                        </div>
                        <div className="self-end">{item.timeStamp}</div>
                     </div>
                  </div>
               )
            })
         }
      </div>
   )
}

export default BettingHistory