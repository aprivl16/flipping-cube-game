import { AcceptableValOfCubeStructure } from "../Cube/types"

export type SingleBetResult = 'idle' | 'win' | 'lose'
export type SingleBetStatus = 'idle' | 'accepted' | 'canceled' | 'sold' | 'completed'

export type SingleBetType = {
   value: AcceptableValOfCubeStructure,
   amount: number,
   status: SingleBetStatus,
   outcome: SingleBetResult,
   timeStamp: string,
   isCalculated: boolean
}


export type BettingType = {
   singleBet: SingleBetType,
   betStorage: SingleBetType[],
   betHistory: SingleBetType[]
} 