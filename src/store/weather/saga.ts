import { SagaIterator } from 'redux-saga';
import { put, call, all, takeLeading } from 'redux-saga/effects';
// Types
import { FiveDaysWhether } from './five-days-weather-types';

// Api
import { APPID, httpFiveDaysWeather, lat, lon } from '../../api';
// Actions
import { getFiveDaysWeather } from './actions';
import { getFiveDaysWeatherFailure, getFiveDaysWeatherSuccess } from './slice';

/**
 * API methods
 */

const fetchFiveDaysWeather = async (): Promise<FiveDaysWhether> => {
  return httpFiveDaysWeather.get('forecast', {
    params: { lat, lon, APPID },
  });
};

/**
 * Sagas
 */

function* getFiveDaysWeatherSaga() {
  try {
    const { data } = yield call(fetchFiveDaysWeather);
    yield put(getFiveDaysWeatherSuccess(data));
  } catch (error) {
    yield put(getFiveDaysWeatherFailure(error));
  }
}

/**
 * Root feature saga
 */

export function* weatherSaga(): SagaIterator {
  yield all([yield takeLeading(getFiveDaysWeather, getFiveDaysWeatherSaga)]);
}
