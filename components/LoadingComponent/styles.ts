import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height - 250;

export const Background = styled.View`
  height: ${deviceHeight}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.application_background};
`;
