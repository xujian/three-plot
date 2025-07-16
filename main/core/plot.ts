import { UniData, PlotConfig } from '../models'

/**
 * Core class of the plot system
 */
class Plot {

  static instances: Plot[]= []

  private readonly canvas: HTMLCanvasElement

  constructor (canvas: HTMLCanvasElement, config: PlotConfig)
   {
    this.canvas = canvas
    const ctx = this.canvas.getContext('2d')
    this.__init()
  }

  private __init () {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }
}

export default Plot
