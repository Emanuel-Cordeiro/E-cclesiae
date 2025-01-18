import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 20px 20px;
  background-color: ${({ theme }) => theme.colors.application_background};
`;
