import { animationData } from '../Animation/data'
import Button from '../../shared/Button/Button'
import useAppDispatch from '../../hooks/useAppDispatch'
import { acceptNewAnimation } from '../../slices/animation.slice'

import useAppSelector from '../../hooks/useAppSelector'



const PlayButton = () => {
  const dispatch = useAppDispatch();
  const {status: animationStatus} = useAppSelector(state => state.animation)

  return (
    <Button
      innerButtonText='Play'
      className="p-[15px_25px] btn-hover rounded-2xl text-2xl mt-[20px]"
      disabled = {
        animationStatus == "idle" 
        ||
        animationStatus == "completed" 
        ? 
        false 
        : 
        true
      }
      onClick = {() => {
        const randomAnimationIndex = Math.floor(Math.random() * animationData.length)
        const randomAnimation = animationData[randomAnimationIndex]
        dispatch(acceptNewAnimation(randomAnimation))
      }}/>
  )
}

export default PlayButton

