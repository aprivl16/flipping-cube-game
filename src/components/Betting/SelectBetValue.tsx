import useAppSelector from '../../hooks/useAppSelector'
import { smallPointSize } from '../../shared/Point/consts'
import { fillByPoints } from '../../shared/Point/function'
import { CubeStructureType } from '../Cube/types'

const SelectBetValue = () => {

   const betDataValue = useAppSelector(state => state.betting.singleBet.value)

   const baseBetStyle = `
         h-[40px] w-[40px] transition duration-[2s] rounded-md
         grid border-2 grid-cols-3 grid-row-3 p-[5px] gap-1 
         [&>div]:transition [&>div]:duration-[1s] `

   const betStyles: CubeStructureType = {
      1: " [&>div]:not-nth-5:opacity-0 ",
      2: " [&>div]:not-nth-[4n+3]:opacity-0 ",
      3: " [&>div]:not-nth-[2n+3]:opacity-0 [&>div]:last:opacity-0 ",
      4: " [&>div]:not-nth-[2n+1]:opacity-0  [&>div]:nth-5:opacity-0  ",
      5: " [&>div]:not-nth-[2n+1]:opacity-0 ",
      6: " [&>div]:nth-[3n+2]:opacity-0 ",
   }

   return (
      <div className={baseBetStyle + betStyles[betDataValue]}>
         {
            fillByPoints(9, smallPointSize)
         }
      </div>
   )
}



// 1 - [&>div]:not-nth-5:opacity-0
// 2 - [&>div]:not-nth-[4n+3]:opacity-0
// 3 - [&>div]:not-nth-[2n+3]:opacity-0 [&>div]:last:opacity-0
// 4 - [&>div]:not-nth-[2n+1]:opacity-0  [&>div]:nth-5:opacity-0 
// 5 - [&>div]:not-nth-[2n+1]:opacity-0 
// 6 - [&>div]:nth-[3n+2]:opacity-0

export default SelectBetValue