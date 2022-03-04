/*
 ** Types
 */
interface UseGetBalanceResponse {
  balance: string;
}
/*
 ** Hook
 */

export const useGetBalance = (): UseGetBalanceResponse => {
  return { balance: '00.50 BTC' };
};
