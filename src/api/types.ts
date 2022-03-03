export enum HomeListState {
  Aceptado = 'Aceptado',
  Rechazado = 'Rechazado',
}

export interface HomeListData {
  id: string;
  title: string;
  date: string;
  currencyAmount: string;
  currencySymbol: string;
  state: keyof typeof HomeListState;
}
