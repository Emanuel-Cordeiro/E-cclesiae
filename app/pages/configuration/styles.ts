import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 30px 20px;
  background-color: ${({ theme }) => theme.colors.application_background};
`;

export const SameLineText = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const ConfigurationText = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_sizes.md}px;
  padding-bottom: 5px;
`;
