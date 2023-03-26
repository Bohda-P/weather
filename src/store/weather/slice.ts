import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// Actions
import { getFiveDaysWeather } from './actions';
// Types
import { FiveDaysWhether } from './five-days-weather-types';

interface WeatherState {
  fiveDaysWeather: FiveDaysWhether;
  loading: boolean;
  error: unknown;
}

const initialState: WeatherState = {
  fiveDaysWeather: null,
  loading: null,
  error: null,
};

export const counterSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getFiveDaysWeatherSuccess: (state, action: PayloadAction<FiveDaysWhether>) => {
      state.fiveDaysWeather = action.payload;
      state.loading = false;
    },
    getFiveDaysWeatherFailure: (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFiveDaysWeather, (state) => {
      state.loading = true;
    });
  },
});

export const { getFiveDaysWeatherSuccess, getFiveDaysWeatherFailure } = counterSlice.actions;

export const weatherReducer = counterSlice.reducer;
