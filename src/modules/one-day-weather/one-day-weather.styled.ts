import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-family: 'Roboto';
`;

export const Location = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const WeatherIcon = styled.Image`
  width: 128px;
  height: 128px;
  margin-bottom: 16px;
`;

export const WeatherInfo = styled.Text`
  font-size: 20px;
  margin-bottom: 16px;
`;

export const Temperature = styled.Text`
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Details = styled.View`
  width: 80%;
  border-top-width: 1px;
  border-top-color: #ddd;
  margin-top: 16px;
  padding-top: 16px;
`;

export const DetailItem = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`;
