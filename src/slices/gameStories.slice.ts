import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AcceptableValOfCubeStructure } from "../components/Cube/types";

const initialState: AcceptableValOfCubeStructure[] = []

const gameStoriesSlice = createSlice({
   name: "gameStories",
   initialState,
   reducers: {
      addResultToStory: (state, action: PayloadAction<AcceptableValOfCubeStructure>) => {
         state.unshift(action.payload)

         if (state.length >= 8) {
            state.length = 8
         }
      }
   }
})

export default gameStoriesSlice.reducer
export const { addResultToStory } = gameStoriesSlice.actions