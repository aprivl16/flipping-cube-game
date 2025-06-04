import useAppSelector from "../../hooks/useAppSelector"
import useAppDispatch from "../../hooks/useAppDispatch"

import { fillByPoints } from "../../shared/Point/function"
import { mediumPointSize } from "../../shared/Point/consts"

import { pointsPositionOnFaceOfCube } from "../Cube/face/styles"
import { acceptBetValue } from "../../slices/betting.slice"


const ShowResult = () => {
   const dispatch = useAppDispatch()
   const {animation} = useAppSelector(state => state)
   const {betStorage} = useAppSelector(state => state.betting)
   const arrayOfFacesValue = [1, 2, 3, 4, 5, 6] as const

   return (
      <div className="grid grid-cols-3 gap-4 p-[40px_30px] bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-2xl">
         {
            arrayOfFacesValue.map((item, index) => {
               const itemWithBet = betStorage.find(elem => elem.value === item)
               return (
                  <div className="relative">

                     <span
                        style={{ display: itemWithBet && item <= 3 ? "inline-block" : "none" }}
                        className={`
                        absolute left-[50%] translate-[-50%] -top-[25%] p-1
                        text-[14px] rounded-[5px] text-white text-shadow-amber-300 text-shadow-lg `}
                     >
                        {
                           itemWithBet?.amount
                        }
                     </span>


                     <div
                        style={{
                           background:
                              animation.value === item &&
                              animation.status === "completed"
                              ?
                              "#A7FC00"
                              :
                              "whitesmoke"
                        }}
                        className={` 
                           w-[75px] h-[75px] text-3xl rounded-[20px]
                           transition delay-[.3s] duration-[1s] cursor-pointer p-[12px] `
                           + pointsPositionOnFaceOfCube[item]
                        }
                        key={index}
                        onClick={() => dispatch(acceptBetValue(item))}
                     >
                        {
                           fillByPoints(item, mediumPointSize)
                        }
                     </div>



                     <span
                        style={{ display: itemWithBet && item > 3 ? "inline-block" : "none" }}
                        className={` 
                        absolute left-[50%] translate-[-50%] -bottom-[60%] p-1 
                        text-[14px] rounded-[5px] text-white text-shadow-amber-300 text-shadow-lg `}
                     >
                        {
                           itemWithBet?.amount
                        }
                     </span>
                  </div>
               )
            })}
      </div>
   )
}

export default ShowResult