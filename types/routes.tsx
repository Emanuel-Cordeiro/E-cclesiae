export type RootTabParamList = {
  prayers: undefined;
  index: undefined;
  routine: undefined;
  rosary: undefined;
  fullRosary: undefined;
  configuration: undefined;
  routineCreation: undefined;
  churchCardData: { itemIndex: number };
  adorationCardData: { itemIndex: number };
  prayersCardData: { itemIndex: number };
  marianPrayersCardData: { itemIndex: number };
};

export interface RouteParamsType {
  itemIndex: number;
}
