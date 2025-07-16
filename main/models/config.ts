import { UniData } from './data'

export type PlotConfig = {
  data: UniData,
  width?: number,
  height?: number,
  [x: string]: unknown,
}
