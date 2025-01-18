import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px 20px;
  background-color: ${({ theme }) => theme.colors.application_background};
`;

export const RoutineTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_sizes.xlg}px;
  font-weight: bold;
  padding-bottom: 5px;
`;

export const RoutinePrayerTitle = styled.Text`
  color: ${({ theme }) => theme.colors.toggle_text_color};
  font-size: ${({ theme }) => theme.font_sizes.lg}px;
  padding-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.toggle_background};
  min-height: 20px;
  border-radius: 8px 8px 0 0;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
`;

export const RoutinePrayerText = styled.Text`
  color: ${({ theme }) => theme.colors.toggle_text_color};
  font-size: ${({ theme }) => theme.font_sizes.sm}px;
  padding-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.toggle_background};
  min-height: 20px;
  width: 100%;
  padding: 10px;
`;

export const RoutineEditView = styled.View`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  flex-direction: row;
`;

export const RoutineEditButton = styled.TouchableOpacity`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const RoutineAddButton = styled.TouchableOpacity`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const LineSeparator = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.text_color};
  border-style: solid;
  margin: 10px 0;
`;

export const RoutineSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_sizes.lg}px;
  font-weight: bold;
  padding: 5px 0;
`;

export const UserRoutineContainer = styled.View`
  width: 100%;
  max-height: 200px;
`;

export const IconPrayer = styled.View`
  padding: 16px;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 16px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.toggle_text_color};
  font-size: ${({ theme }) => theme.font_sizes.lg}px;
  padding-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.button_routine_color};
  min-height: 20px;
  width: 100%;
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;

export const UserRoutineEditView = styled.View`
  border-radius: 8px;
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.toggle_background};
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const UserRoutineButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.toggle_text_color};
  font-size: ${({ theme }) => theme.font_sizes.lg}px;
  padding-bottom: 5px;
  min-height: 20px;
  border-radius: 8px;
  width: 100%;
  padding: 10px;
  flex: 1;
`;
