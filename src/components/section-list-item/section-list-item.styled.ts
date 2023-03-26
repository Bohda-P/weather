import styled from 'styled-components/native';
// Assets
import { ArrowRight } from '../../assets';

export const Container = styled.TouchableOpacity`
  margin: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  background-color: #bce9ed;
  border-radius: 10px;
`;

export const Column = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Time = styled.Text`
  font-size: 16;
  font-family: 'Roboto-Bold';
`;

export const GeneralInfo = styled.Text`
  font-size: 12;
  font-family: 'Roboto-Medium';
`;

export const Temperature = styled.Text`
  margin-top: 10px;
  font-size: 14;
  font-family: 'Roboto-Medium';
`;

export const Icon = styled(ArrowRight).attrs({ width: 24, height: 24 })``;
