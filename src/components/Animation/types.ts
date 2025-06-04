import { AcceptableValOfCubeStructure } from "../Cube/types"


export type AnimationVersion = "idle" | "new" | "finished"

export type AnimationStatus = "idle" | "passed" | "in progress" | "completed"

export type AnimationType = { 
   name: string,
   value: AcceptableValOfCubeStructure,
   version: AnimationVersion,
   status: AnimationStatus
}
