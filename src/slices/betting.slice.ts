import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BettingType, SingleBetStatus, SingleBetType } from "../components/Betting/types";
import { AcceptableValOfCubeStructure } from "../components/Cube/types";

const singleBetInitial: SingleBetType = {
   value: 1,
   amount: 0,
   status: 'idle',
   outcome: 'idle',
   timeStamp: "",
   isCalculated: false
}

const initialState: BettingType = {
   singleBet: singleBetInitial,
   betStorage: [],
   betHistory: []
}


const bettingSlice = createSlice({
   name: "betting",
   initialState,
   reducers: {
      acceptBetValue: (state, action: PayloadAction<AcceptableValOfCubeStructure>) => {
         state.singleBet.value = action.payload
      },
      acceptBetAmount: (state, action: PayloadAction<number>) => {
         state.singleBet.amount = action.payload
      },
      setBetStatus: (state, action: PayloadAction<SingleBetStatus>) => {
         state.singleBet.status = action.payload
      },
      recordTimeWhenBetIsAccepted: (state) => {
         const acceptanceTime = new Date()
         let acceptanceTimeMin = String(acceptanceTime.getMinutes())

         if (acceptanceTimeMin.length === 1) {
            acceptanceTimeMin = `0${acceptanceTimeMin}`
         }

         state.singleBet.timeStamp = `${acceptanceTime.getHours()}:${acceptanceTimeMin}`
      },
      addToBetStorage: state => {
         const { betStorage: storage, singleBet: currentBetItem } = state
         const addedItem = storage.find(item => item.value === currentBetItem.value)

         if (!!addedItem) {
            addedItem.amount += currentBetItem.amount
         } else {
            storage.push({ ...currentBetItem })
         }

         currentBetItem.amount = 0
         currentBetItem.status = 'idle'

      },
      finishBet: (state, action: PayloadAction<AcceptableValOfCubeStructure>) => {
         const { betStorage: storage } = state
         storage.map(item => {
            if (item.value === action.payload) {
               item.outcome = 'win'
            } else {
               item.outcome = 'lose'
            }
            item.status = "completed"
         })
         state.betHistory.push(...storage)
         state.betStorage = []
      },
      calculateBet: (state) => {
        state.betHistory.forEach(item => item.isCalculated = true)
      }
   }
})

export default bettingSlice.reducer
export const {
   acceptBetValue,
   acceptBetAmount,
   setBetStatus,
   recordTimeWhenBetIsAccepted,
   addToBetStorage,
   finishBet,
   calculateBet
} = bettingSlice.actions