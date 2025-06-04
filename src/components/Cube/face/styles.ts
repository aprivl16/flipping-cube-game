import { CubeStructureType } from "../types"


export const defaultStyleFaceOfCube = "absolute w-[100px] h-[100px] "

export const pointsPositionOnFaceOfCube: CubeStructureType = {
   1: " flex justify-center items-center ",
   2: " flex justify-between items-start [&>div]:first:self-end ",
   3: " flex justify-between items-center [&>div]:first:self-end [&>div]:last:self-start ",
   4: " grid grid-cols-2 [&>div]:justify-self-center [&>div]:self-center ",
   5: ` grid grid-cols-3 grid-rows-3 [&>div]:justify-self-center [&>div]:self-center
         [&>div]:nth-1:col-start-1 
         [&>div]:nth-2:col-start-3
         [&>div]:nth-3:col-start-2 [&>div]:nth-3:row-start-2
         [&>div]:nth-4:row-start-3
         [&>div]:nth-5:col-start-3 [&>div]:nth-5:row-start-3
      `,
   6: " grid  grid-cols-2 [&>div]:justify-self-center [&>div]:self-center "
}
export const colorsFaceOfCube:CubeStructureType = {
      1:"bg-sky-300",
      2:"bg-red-300",
      3:"bg-orange-300",
      4:"bg-purple-400",
      5:"bg-emerald-400",
      6:"bg-pink-600 ",
}