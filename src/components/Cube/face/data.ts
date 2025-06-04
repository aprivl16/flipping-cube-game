import { nanoid } from "@reduxjs/toolkit"
import { FaceType } from "./types"



const faces: FaceType[] = [
   {
      value: 1,
      keyId: nanoid(12)
   },
   {
      value: 2,
      keyId: nanoid(12)
   },
   {
      value: 3,
      keyId: nanoid(12)
   },
   {
      value: 4,
      keyId: nanoid(12)
   },
   {
      value: 5,
      keyId: nanoid(12)
   },
   {
      value: 6,
      keyId: nanoid(12)
   }
]

export default faces