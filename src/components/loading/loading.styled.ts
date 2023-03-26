import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

export const Indicator = styled.ActivityIndicator.attrs(() => ({
  color: '#57c1db',
  size: 'large',
}))``;
