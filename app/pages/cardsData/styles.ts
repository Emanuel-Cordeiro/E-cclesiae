import styled from 'styled-components/native';

export const Background = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.application_background};
  padding: 0 20px;
`;

export const InformationTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_sizes.xlg}px;
  font-weight: bold;
  padding-bottom: 10px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.poppins_bold};
`;

export const InformationSubtitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  padding-bottom: 5px;
  font-size: ${({ theme }) => theme.font_sizes.md}px;
  font-family: ${({ theme }) => theme.fonts.poppins_bold};
`;

export const InformationText = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_sizes.sm}px;
  padding-bottom: 5px;
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
`;
