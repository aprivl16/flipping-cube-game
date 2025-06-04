import { createSlice } from "@reduxjs/toolkit";
import { AnimationStatus, AnimationType, AnimationVersion } from "../components/Animation/types";
import type { PayloadAction } from '@reduxjs/toolkit'



const initialState: AnimationType = {
   name: '',
   value: 0,
   version: "idle",
   status: "idle"
}


const animationSlice = createSlice({
   name: "animationSlice",
   initialState,
   reducers: {
      acceptNewAnimation: (state, action: PayloadAction<AnimationType>) => {
         Object.assign(state, action.payload)
      },
      changeVersionOfAnimation: (state, action: PayloadAction<AnimationVersion>) => {
         state.version = action.payload
      },
      setAnimationStatus: (state, action: PayloadAction<AnimationStatus>) => {
         state.status = action.payload
      }
      

   }
})

export default animationSlice.reducer
export const { 
   acceptNewAnimation, 
   changeVersionOfAnimation, 
   setAnimationStatus 
} = animationSlice.actions