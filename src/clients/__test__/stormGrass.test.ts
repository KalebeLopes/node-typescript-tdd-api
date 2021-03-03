import { StormGlass } from '../stormGlass'
import axios from 'axios'
import stormGlassWeather3HoursFixture from '../../../test/fixtures/stormGlass_weather_3_hours.json'
import stormGlassNormalized3HoursFixture from '../../../test/fixtures/stormGlass_normalized_response_3_hours.json'



jest.mock('axios')

describe('StormGlass client', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>  // junta os tipos do axios e do jest
  it('should return te normalized forecast frm the StormGlass service', async() => {
    const lat = -33
    const lng = 151

    mockedAxios.get.mockResolvedValue({data: stormGlassWeather3HoursFixture}) // mock do jest

    const stormGlass = new StormGlass(mockedAxios);
    const response = await stormGlass.fetchPoints(lat, lng)
    
    expect(response).toEqual(stormGlassNormalized3HoursFixture)
})
})