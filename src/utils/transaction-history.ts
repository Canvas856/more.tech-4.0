import {
  EnumeratedHistoryItem,
  NftHistoryItem,
  TransactionHistoryItem,
} from '~/types/transaction-history';

export function isEnumeratedHistoryItem(obj: any): obj is EnumeratedHistoryItem {
  return obj.value !== undefined;
}
export function isNftHistoryItem(obj: any): obj is NftHistoryItem {
  return obj.tokenId !== undefined;
}

export function filterEnumeratedHistory(
  history: TransactionHistoryItem[],
): EnumeratedHistoryItem[] {
  return history.filter(isEnumeratedHistoryItem);
}
export function filterNftHistory(history: TransactionHistoryItem[]): NftHistoryItem[] {
  return history.filter(isNftHistoryItem);
}
