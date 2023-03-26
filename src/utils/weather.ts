import { KELVIN_TEMPERATURE } from '../constants';

export const convertToCelsius = (temp: number) => Math.round(temp - KELVIN_TEMPERATURE);
