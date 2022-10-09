export interface HistoryItem {
  hash: string;
  blockNumber: number;
  timeStamp: number;
  contractAddress: string;
  from: string;
  to: string;
  gasUsed: number;
  confirmations: number;
  isError: string;
}

export interface NftHistoryItem extends HistoryItem {
  tokenId: number;
  tokenSymbol: 'NFT';
  tokenName: 'NFT';
}

export interface EnumeratedHistoryItem extends HistoryItem {
  value: number;
  tokenName: 'MATIC' | 'Digital Ruble';
  tokenSymbol: 'MATIC' | 'DRUB';
}

export type TransactionHistoryItem = NftHistoryItem | EnumeratedHistoryItem;
