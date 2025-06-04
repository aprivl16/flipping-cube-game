import useAppSelector from "../../hooks/useAppSelector"
import useAppDispatch from "../../hooks/useAppDispatch"
import { useEffect, useRef, useState } from "react"

import { addResultToStory } from "../../slices/gameStories.slice"
import { changeVersionOfAnimation, setAnimationStatus } from "../../slices/animation.slice"
import { finishBet } from "../../slices/betting.slice"

import { fillByPoints } from "../../shared/Point/function"
import { largePointSize } from "../../shared/Point/consts"

import { colorsFaceOfCube, defaultStyleFaceOfCube, pointsPositionOnFaceOfCube } from "./face/styles"
import faces from "./face/data"




const Cube = () => {
   const currentAnimation = useAppSelector(state => state.animation)
   const dispatch = useAppDispatch()
   const allowCompareFlag = useRef<boolean>(true)

   const [usedAnimation, setUsedAnimation] = useState({
      name: "",
      executeSameAnimation: false
   })
 



   if (
      currentAnimation.name === usedAnimation.name
      && currentAnimation.version === "new"
      && allowCompareFlag.current.valueOf()
   ) {
      setUsedAnimation(prev => ({ ...prev, executeSameAnimation: true }))
      allowCompareFlag.current = false
   }

   useEffect(() => {
      if (usedAnimation.executeSameAnimation === true) {
         setUsedAnimation(prev => ({ ...prev, executeSameAnimation: false }))
      }
   }, [usedAnimation])

   return (
      <div
         style = {{
            animation: usedAnimation.executeSameAnimation ? '' : currentAnimation.name
         }}
         onAnimationStart = {() => {
            dispatch(setAnimationStatus("in progress"))
         }}
         onAnimationEnd = {() => {
            allowCompareFlag.current = true
            
            dispatch(changeVersionOfAnimation("finished"))
            dispatch(setAnimationStatus("completed"))
            dispatch(addResultToStory(currentAnimation.value))
            dispatch(finishBet(currentAnimation.value))

            setUsedAnimation(prev => ({ ...prev, name: currentAnimation.name }))
         }}

         className='w-[100px] h-[100px]  cube relative transform-3d origin-center perspective-none transition  duration-[2s]'>

         {faces.map((item) => {
            let classFaceStyle = defaultStyleFaceOfCube + pointsPositionOnFaceOfCube[item.value]

            switch (item.value) {
               case 1:
                  classFaceStyle += `${colorsFaceOfCube[item.value]} p-[15px] translate-z-[50px]`
                  break;
               case 2:
                  classFaceStyle += `${colorsFaceOfCube[item.value]} p-[15px] -translate-x-full origin-right rotate-y-[90deg] -translate-z-[50px]`
                  break;
               case 3:
                  classFaceStyle += `${colorsFaceOfCube[item.value]} p-[15px] translate-x-full origin-left -rotate-y-[90deg] -translate-z-[50px]`
                  break;
               case 4:
                  classFaceStyle += `${colorsFaceOfCube[item.value]} p-[15px] origin-bottom -translate-y-full rotate-x-[90deg] translate-z-[50px]`
                  break;
               case 5:
                  classFaceStyle += `${colorsFaceOfCube[item.value]} p-[10px] origin-top translate-y-full -rotate-x-[90deg] translate-z-[50px]`
                  break;
               case 6:
                  classFaceStyle += `${colorsFaceOfCube[item.value]} p-[15px] -translate-z-[50px] `
                  break;
            }

            return (
               <div className={classFaceStyle} key={item.keyId}>
                  {
                     fillByPoints(item.value, largePointSize)
                  }
               </div>
            )
         })}

      </div>
   )
}

export default Cube

