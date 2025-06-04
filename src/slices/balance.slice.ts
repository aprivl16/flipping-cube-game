import { createSlice } from "@reduxjs/toolkit";
import { BalanceValueType } from "../ui/types";
import type { PayloadAction } from "@reduxjs/toolkit";


const initialState: BalanceValueType = {
      value: 1000,
      canSpendStatus: true
   }

const balanceSlice = createSlice({
   name: "balance",
   initialState,
   reducers: {
      spendBalance: (state, action: PayloadAction<number>) => {
         if(state.value >= action.payload){
            state.value -= action.payload
         }
      },
      calculateWin: (state, action: PayloadAction<number>) => {
         state.value += action.payload * 5
      },
      topUpBalance: (state) => {
         state.value += 25
      },
      setSpendStatus: (state, action: PayloadAction<boolean>) => {
         state.canSpendStatus = action.payload
      }

   }
})

export default balanceSlice.reducer
export const {
   spendBalance,
   topUpBalance,
   calculateWin,
   setSpendStatus,
} = balanceSlice.actions