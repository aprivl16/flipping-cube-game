import { PointSizeType } from "./types"


const Point = (size: PointSizeType) => {
  return (
    <div style={size} className='rounded-[50%]  bg-black'></div>
  )
}



export default Point