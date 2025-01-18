import styled from 'styled-components/native';

interface ToggleProps {
  selected: boolean;
}

export const Container = styled.View`
  align-items: center;
`;

export const Toggle = styled.View<ToggleProps>`
  background-color: ${({ theme }) => theme.colors.toggle_background};
  width: 90%;
  margin: 8px 16px 0 16px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ selected }) => (selected ? '8px 8px 0 0' : '8px')};
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_sizes.lg}px;
  color: ${({ theme }) => theme.colors.toggle_text_color};
  font-family: ${({ theme }) => theme.fonts.poppins_bold};
`;

export const ContainerPrayer = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.toggle_background};
  min-height: 40px;
  border-radius: 0 0 8px 8px;
  width: 90%;
`;

export const ContainerPrayerItem = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const IconPrayer = styled.View`
  padding: 16px;
`;

export const IconButton = styled.TouchableOpacity`
  flex: 1;
`;

export const PrayerTitle = styled.Text`
  padding: 16px;
  font-size: ${({ theme }) => theme.font_sizes.md}px;
  color: ${({ theme }) => theme.colors.toggle_text_color};
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
  max-width: 85%;
`;
