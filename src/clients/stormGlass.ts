import { AxiosStatic } from 'axios'

export class StormGlass {
  readonly stormGlassAPIParamas = 
    'swellDirection%2CswellHeight%2CswellPeriod%2CwaveDirection%2CwaveHeight%2CwindDirection,windSpeed'
  readonly stormGlassAPISource = 'noaaa'
  

  constructor(protected request: AxiosStatic) {

  }
  public async fetchPoints(lat: number, lng: number): Promise<{}> {
    return this.request.get(
      `https://api.stormglass.io/v2/weather/point?params=${this.stormGlassAPIParamas}&source=${this.stormGlassAPISource}&end=1592113802&lat=%24%7Blat%7D&lng=%24%7Blng%7D`
    )
    
  } 
}