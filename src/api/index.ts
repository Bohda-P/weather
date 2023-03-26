import axios from 'axios';

// /forecast?lat=44.34&lon=10.99&APPID={API key}
export const httpFiveDaysWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 60000,
});

export const APPID = '9ba24f66d22705844bc065eb342c088d';
export const lat = '49.2327800';
export const lon = '28.4809700';
