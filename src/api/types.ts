export enum HomeListStateEnum {
  Aceptado = 'Aceptado',
  Rechazado = 'Rechazado',
}

export interface HomeListData {
  id: string;
  title: string;
  date: string;
  currencyAmount: number;
  currencySymbol: string;
  state: keyof typeof HomeListStateEnum;
  destination: string;
  currencyAmountConverted: number;
  currencySymbolConverted: string;
}

export interface HomeRates {
  rates: {
    PEN_SELL: number;
    CLP_SELL: number;
    PEN_BUY: number;
    COP_SELL: number;
    USD_BUY: number;
    USD_SELL: number;
    EUR_BUY: number;
    ARS_SELL: number;
    MXN_BUY: number;
    COP_BUY: number;
    CLP_BUY: number;
    BRL_BUY: number;
    BRL_SELL: number;
    ARS_BUY: number;
    UYU_SELL: number;
    EUR_SELL: number;
    UYU_BUY: number;
    MXN_SELL: number;
  };
}

export interface HomeRatesVariation {
  variation: {
    MXN: number;
    COP: number;
    PEN: number;
    USD: number;
    UYU: number;
    BRL: number;
    CLP: number;
    EUR: number;
    ARS: number;
  };
}

export interface HomeRatesResponse extends HomeRates, HomeRatesVariation {
  base: string;
  names: {
    COP: {
      symbol: string;
      name: string;
    };
    BAT: {
      symbol: string;
      name: string;
    };
    USD: {
      symbol: string;
      name: string;
    };
    AXS: {
      symbol: string;
      name: string;
    };
    RCN: {
      symbol: string;
      name: string;
    };
    LINK: {
      symbol: string;
      name: string;
    };
    ETH: {
      symbol: string;
      name: string;
    };
    PAXG: {
      symbol: string;
      name: string;
    };
    DAI: {
      symbol: string;
      name: string;
    };
    MANA: {
      symbol: string;
      name: string;
    };
    RPC: {
      symbol: string;
      name: string;
    };
    USDC: {
      symbol: string;
      name: string;
    };
    SLP: {
      symbol: string;
      name: string;
    };
    LTC: {
      symbol: string;
      name: string;
    };
    UNI: {
      symbol: string;
      name: string;
    };
    CHZ: {
      symbol: string;
      name: string;
    };
    CLP: {
      symbol: string;
      name: string;
    };
    EUR: {
      symbol: string;
      name: string;
    };
    USDT: {
      symbol: string;
      name: string;
    };
    ARS: {
      symbol: string;
      name: string;
    };
    UYU: {
      symbol: string;
      name: string;
    };
    DOGE: {
      symbol: string;
      name: string;
    };
    PEN: {
      symbol: string;
      name: string;
    };
    MXN: {
      symbol: string;
      name: string;
    };
    AAVE: {
      symbol: string;
      name: string;
    };
    BRL: {
      symbol: string;
      name: string;
    };
    BTC: {
      symbol: string;
      name: string;
    };
    MATIC: {
      symbol: string;
      name: string;
    };
    UBI: {
      symbol: string;
      name: string;
    };
  };
}

export interface SendFastestFees {
  fastestFee: number;
}

export interface SendFeesResponse extends SendFastestFees {
  halfHourFee: number;
  hourFee: number;
}
