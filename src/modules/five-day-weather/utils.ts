import { FiveDaysListItem, FiveDaysWhether } from '../../store/weather/five-days-weather-types';

export const groupWeatherDataByDay = (weatherDataList: FiveDaysWhether) => {
  const weatherDataByDay = {};
  weatherDataList?.list.forEach((weatherData) => {
    const date = new Date(weatherData.dt_txt.split(' ')[0]);
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    if (!weatherDataByDay[day]) {
      weatherDataByDay[day] = [];
    }
    weatherDataByDay[day].push(weatherData);
  });

  return Object.entries(weatherDataByDay).map(([day, weatherData]) => ({
    title: day,
    data: weatherData as FiveDaysListItem,
  }));
};
