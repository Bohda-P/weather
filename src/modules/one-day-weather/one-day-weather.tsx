import React from 'react';
// Hooks
import { useAppSelector } from '../../store/hooks';
// Namespace
import { RootStackParamList } from '../../navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorRoutes } from '../../navigation/navigation.namespace';
// Utils
import { convertToCelsius } from '../../utils';
// Selectors
import { selectOneDayWeather } from '../../store/weather/selectors';
// Styled
import {
  Container,
  Location,
  WeatherIcon,
  WeatherInfo,
  Temperature,
  Details,
  DetailItem,
} from './one-day-weather.styled';

type OneDayWeatherProps = NativeStackScreenProps<
  RootStackParamList,
  NavigatorRoutes.ONE_DAY_WEATHER
>;

const OneDayWeather: React.FC<OneDayWeatherProps> = ({ route }) => {
  const { day } = route.params;

  const oneDayWeather = useAppSelector(selectOneDayWeather(day));
  console.log(oneDayWeather);

  return (
    <Container>
      <Location>{'Vinnytsia, UA'}</Location>
      <WeatherIcon
        source={{ uri: `https://openweathermap.org/img/w/${oneDayWeather?.weather[0].icon}.png` }}
      />
      <WeatherInfo>{oneDayWeather?.weather[0].description}</WeatherInfo>
      <Temperature>{`${convertToCelsius(oneDayWeather?.main?.temp as number)}°C`}</Temperature>
      <Details>
        <DetailItem>{`Pressure: ${oneDayWeather?.main.pressure} hPa`}</DetailItem>
        <DetailItem>{`Humidity: ${oneDayWeather?.main.humidity}%`}</DetailItem>
        <DetailItem>{`Wind Speed: ${oneDayWeather?.wind.speed} m/s`}</DetailItem>
        <DetailItem>{`Cloudiness: ${oneDayWeather?.clouds.all}%`}</DetailItem>
      </Details>
    </Container>
  );
};

export default OneDayWeather;
