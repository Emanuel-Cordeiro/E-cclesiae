import styled from 'styled-components/native';

export const ContainerComponent = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContainerCard = styled.View`
  background-color: ${({ theme }) => theme.colors.alert_card_background};
  width: 100%;
  height: 70px;
  padding: 5px 10px;
  border-radius: 8px 8px;
  justify-content: center;
`;

export const DescriptionCard = styled.Text`
  color: ${({ theme }) => theme.colors.alert_card_text};
  font-size: ${({ theme }) => theme.font_sizes.md}px;
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
  text-align: center;
`;
