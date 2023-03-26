import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectProductRootState = (state: RootState) => state.weather;

export const selectFiveDaysWeather = createSelector(
  selectProductRootState,
  ({ fiveDaysWeather }) => fiveDaysWeather
);

export const selectOneDayWeather = (day: number) =>
  createSelector(selectProductRootState, ({ fiveDaysWeather }) =>
    fiveDaysWeather.list.find(
      (item) =>
        new Date(item.dt_txt).getTime() === day ||
        new Date(item.dt_txt).getDate() === new Date(day).getDate()
    )
  );

export const selectHasFiveDaysWeatherData = createSelector(
  selectProductRootState,
  ({ fiveDaysWeather }) => !!fiveDaysWeather
);

export const selectWeatherLoading = createSelector(
  selectProductRootState,
  ({ loading }) => loading
);
