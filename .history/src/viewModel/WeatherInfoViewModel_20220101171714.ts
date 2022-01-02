import WeatherDetailRepository from '../model/WeatherDetailRespository';
import WeatherForecastRepository from '../model/WeatherForecastRepository';

class WeatherInfoViewModel {
  weatherDetailRepository: WeatherDetailRepository;
  weatherForecastRepository: WeatherForecastRepository;

  constructor(detailRepo: WeatherDetailRepository) {
    this.weatherDetailRepository = detailRepo;
    this.weatherForecastRepository = new WeatherForecastRepository();
  }

  getWeatherDetail() {
    return this.weatherDetailRepository.getWeatherDetailData();
  }

  getWeatherForecase() {
    return this.weatherForecastRepository.callWeatherDetailApi;
  }
}

export default WeatherInfoViewModel;