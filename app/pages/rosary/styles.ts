import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px 20px;
  background-color: ${({ theme }) => theme.colors.application_background};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_sizes.xlg}px;
  font-weight: bold;
  padding-bottom: 5px;
  text-align: center;
`;
