import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'

import Button from '../../shared/Button/Button'
import Input from '../../shared/Input/Input'

import { setSpendStatus, spendBalance } from '../../slices/balance.slice'
import { acceptBetAmount, addToBetStorage, recordTimeWhenBetIsAccepted, setBetStatus } from '../../slices/betting.slice'

import SelectBetValue from './SelectBetValue'

const Betting = () => {
   const dispatch = useAppDispatch()
   const balanceValue = useAppSelector(state => state.balance.value)

   const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const input = e.currentTarget.input as HTMLInputElement
      const value  = +input.value

      if(value <= balanceValue){
         dispatch(acceptBetAmount(value))
         dispatch(setBetStatus("accepted"))
         dispatch(recordTimeWhenBetIsAccepted())
         dispatch(addToBetStorage())
         dispatch(spendBalance(value))
         dispatch(setSpendStatus(true))
      }
      else{
         dispatch(setSpendStatus(false))
      }
      

      
      e.currentTarget.reset()
   }

   return (
      <div className=' absolute w-1/5 h-[250px] bg-[rgba(255,255,255,.1)] top-[30%] rounded-[20px] right-[15px]  flex flex-col items-center gap-y-[25px] p-[25px] border-3 border-dashed border-r-0 '>
         
         <SelectBetValue />

         <form
            action="#"
            onSubmit={handleOnSubmit}
            className='flex flex-col justify-between items-center gap-y-[25px] '>

            <Input type="text"
               name='input'
               autoComplete="off"
               pattern='\b[1-9]\d*'
               className='border-2 text-center p-[10px] outline-none rounded-2xl' min="1" placeholder='Enter bet amount' required />
            <Button
               innerButtonText='Bet'
               className='border-2 text-[18px] p-[10px_35px] rounded-2xl bg-linear-to-br from-orange-500 to-cyan-50' />
         </form>

      </div>
   )
}

export default Betting

