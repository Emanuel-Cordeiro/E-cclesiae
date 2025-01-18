import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px 20px;
  background-color: ${({ theme }) => theme.colors.application_background};
`;

export const IconButton = styled.TouchableOpacity`
  flex: 1;
`;

export const IconRoutine = styled.View`
  padding: 5px;
`;

export const RoutineTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_sizes.xlg}px;
  font-weight: bold;
  padding-bottom: 5px;
  text-align: center;
`;

export const SameLineContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.text_color};
  border-style: solid;
  margin-bottom: 10px;
`;
