import { combineReducers } from '@reduxjs/toolkit';
// Reducers
import { weatherReducer } from './weather/slice';

export const rootReducer = combineReducers({
  weather: weatherReducer,
});
