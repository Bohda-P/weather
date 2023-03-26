import React from 'react';
// Styled
import {
  Column,
  Container,
  GeneralInfo,
  Temperature,
  Time,
  Icon,
} from './section-list-item.styled';

interface Props {
  time: string;
  weatherInfo: string;
  temperature: string;
  onPress: () => void;
}

const SectionListItem: React.FC<Props> = ({ time, weatherInfo, temperature, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Time>{`Time: ${time}`}</Time>
      <Column>
        <GeneralInfo>{`Weather Info: ${weatherInfo}`}</GeneralInfo>
        <Temperature>{`Temperature: ${temperature}`}</Temperature>
      </Column>
      <Icon />
    </Container>
  );
};

export default SectionListItem;
