import React from 'react';
import { CalendarIcon, Container } from './calendar.styled';

interface Props {
  onPress: () => void;
}

const Calendar: React.FC<Props> = ({ onPress }) => {
  return (
    <Container onPress={onPress} hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}>
      <CalendarIcon />
    </Container>
  );
};

export default Calendar;
