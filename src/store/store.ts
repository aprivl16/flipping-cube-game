import { configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import animationReducer from '../slices/animation.slice'
import gameStoriesReducer from '../slices/gameStories.slice'
import bettingReducer from '../slices/betting.slice'
import balanceReducer from '../slices/balance.slice'

const store =  configureStore({
   reducer: {
      animation: animationReducer,
      gameStories: gameStoriesReducer,
      betting: bettingReducer,
      balance: balanceReducer,
   }
})


export type StoreType  = typeof store
export type RootStateType = ReturnType<StoreType['getState']>
export type DispatchType = StoreType['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootStateType,
  unknown,
  Action
>

export default store