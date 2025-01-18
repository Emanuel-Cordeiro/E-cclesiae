import styled from 'styled-components/native';

export const ToggleContentButton = styled.TouchableOpacity`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const ToggleContentTitleView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const ToggleContentTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_sizes.lg}px;
  padding-bottom: 5px;
  font-weight: bold;
`;

export const ToggleContentIconView = styled.View`
  padding: 5px;
`;

export const ToggleContentIconButton = styled.TouchableOpacity`
  flex: 1;
`;

export const ToggleContentText = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_sizes.sm}px;
  padding-bottom: 5px;
`;
