import styled from 'styled-components/native';

export const ContainerButtonCard = styled.View`
  background-color: ${({ theme }) => theme.colors.toggle_background};
  height: 50px;
  padding: 0 20px;
  margin: 0 0 10px 0;
  border-radius: 8px 8px;
`;

export const ComponentButtonCard = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
`;

export const DescriptionButtonCard = styled.Text`
  color: ${({ theme }) => theme.colors.toggle_text_color};
  font-size: ${({ theme }) => theme.font_sizes.lg}px;
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
`;
