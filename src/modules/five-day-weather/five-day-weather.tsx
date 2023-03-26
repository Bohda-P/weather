import React, { useCallback, useEffect, useState } from 'react';
// Hooks
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
// Components
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { View, Text, SectionList, SectionListRenderItem } from 'react-native';
import { Calendar, Loading, SectionListItem } from '../../components';
// Namespace
import { NavigatorRoutes } from '../../navigation/navigation.namespace';
import { FiveDaysListItem } from '../../store/weather/five-days-weather-types';
import { isIos } from '../../constants';
// Selectors
import {
  selectFiveDaysWeather,
  selectWeatherLoading,
  selectHasFiveDaysWeatherData,
} from '../../store/weather/selectors';
// Actions
import { getFiveDaysWeather } from '../../store/weather/actions';
// Utils
import { convertToCelsius } from '../../utils';
import { groupWeatherDataByDay } from './utils';
// Styled
import { Title, Container } from './five-day-weather.styled';

const FiveDayWeather: React.FC = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const currentDate = new Date();
  const fiveDaysLater = new Date();
  fiveDaysLater.setDate(fiveDaysLater.getDate() + 4);

  const { navigate, setOptions } = useNavigation();

  const dispatch = useAppDispatch();
  const fiveDaysWeather = useAppSelector(selectFiveDaysWeather);
  const hasFiveDaysWeatherData = useAppSelector(selectHasFiveDaysWeatherData);
  const loading = useAppSelector(selectWeatherLoading);

  const onWeatherDayPress = (day: number) => {
    navigate(NavigatorRoutes.ONE_DAY_WEATHER as never, { day } as never);
  };

  useEffect(() => {
    if (!hasFiveDaysWeatherData) {
      dispatch(getFiveDaysWeather());
    }
  }, [dispatch, hasFiveDaysWeatherData]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (pickedDate: Date) => {
    hideDatePicker();
    onWeatherDayPress(pickedDate.getTime());
  };

  /**
   * VIEW
   */

  const CalendarComponent: React.FC = useCallback(() => <Calendar onPress={showDatePicker} />, []);

  useEffect(() => {
    setOptions({ headerRight: CalendarComponent });
  }, [setOptions, CalendarComponent]);

  if (loading) {
    return <Loading />;
  }

  const renderItem: SectionListRenderItem<FiveDaysListItem> = ({ item }) => {
    const time = new Date(item.dt_txt).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });
    const temperature = `${convertToCelsius(item.main.temp)}°C`;

    return (
      <SectionListItem
        time={time}
        temperature={temperature}
        weatherInfo={item.weather[0].description}
        onPress={() => onWeatherDayPress(new Date(item.dt_txt).getTime())}
      />
    );
  };

  const renderSectionHeader = ({ section }) => (
    <View style={{ padding: 10, backgroundColor: '#eee' }}>
      <Text>{section.title}</Text>
    </View>
  );

  const renderListHeaderComponent = () => (
    <Container>
      <Title>Weather in - {fiveDaysWeather?.city.name}</Title>
    </Container>
  );

  return (
    <>
      <SectionList
        sections={groupWeatherDataByDay(fiveDaysWeather) as any}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListHeaderComponent={renderListHeaderComponent}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={fiveDaysLater}
        minimumDate={currentDate}
        display={isIos ? 'inline' : 'default'}
      />
    </>
  );
};

export default FiveDayWeather;
