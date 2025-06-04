import { PointSizeType } from "./types";

import Point from "./Point";

export function fillByPoints(num: number, size: PointSizeType) {
   return new Array(num).fill(1).map(() => <Point {...size}/> )
}
