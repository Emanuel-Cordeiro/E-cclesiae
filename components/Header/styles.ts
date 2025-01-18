import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.application_background};
  height: 100px;
  width: 100%;
  padding: 0 30px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title_tabicon_color};
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.poppins_bold};
`;
