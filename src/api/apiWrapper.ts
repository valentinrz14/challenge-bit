import { HomeRatesResponse, SendFeesResponse } from '@api/types';
import { REACT_APP_FEES_URL, REACT_APP_RATES_URL } from '@env';
import axios, { AxiosError, AxiosResponse } from 'axios';

/*
 ** Components
 */
const apiClient = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleError = (error: AxiosError) => {
  if (error.response) {
    const message = error.response?.data.message;
    return Promise.reject(new Error(message));
  }
  return Promise.reject(new Error(error.message));
};

const handleResponse = (response: AxiosResponse) => {
  if (response.status !== 200) {
    return handleError(response.data);
  }
  return response.data;
};

export const getRates = async (): Promise<HomeRatesResponse> => {
  const response = await apiClient.get(REACT_APP_RATES_URL + '/rates');
  return handleResponse(response);
};

export const getFees = async (): Promise<SendFeesResponse> => {
  const response = await apiClient.get(REACT_APP_FEES_URL + '/recommended');
  return handleResponse(response);
};
