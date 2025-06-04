import useAppSelector from "../../hooks/useAppSelector"

const GameStories = () => {
  const stories = useAppSelector(state => state.gameStories)
  const baseStyleOfStoryItem = ` h-[30px] w-[10%] text-white rounded-3xl bg-black flex justify-center items-center p-[15px] `   
  return (
    <div className='w-3/5 h-[60px] flex justify-center items-center p-[10px_20px] gap-x-2 shadow-md shadow-red-400 rounded-2xl'>
      {
        stories.length === 0
          ?
          (
            <div className={`${baseStyleOfStoryItem} text-[20px] `}>
              ?
            </div>
          )
          :
          (
            stories.map(item => {
              return (
                <div
                  className={baseStyleOfStoryItem}
                >
                  {
                    item
                  }
                </div>
              )
            })
          )
      }
    </div>
  )
}

export default GameStories