import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.application_background};
`;

export const SameLineText = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ReadingTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  padding-bottom: 5px;
  font-size: ${({ theme }) => theme.font_sizes.lg}px;
  font-family: ${({ theme }) => theme.fonts.poppins_bold};
`;

export const LiturgyTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  padding-bottom: 5px;
  font-size: ${({ theme }) => theme.font_sizes.md}px;
  font-family: ${({ theme }) => theme.fonts.poppins_bold};
`;

export const LiturgyTitleHighlight = styled.Text`
  font-weight: bold;
`;

export const LiturgyReferenceHightlight = styled.Text`
  font-size: ${({ theme }) => theme.font_sizes.xsm}px;
`;

export const LiturgyText = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_sizes.sm}px;
  padding-bottom: 5px;
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_sizes.xlg}px;
  font-weight: bold;
  padding-bottom: 5px;
  font-family: ${({ theme }) => theme.fonts.poppins_bold};
`;
