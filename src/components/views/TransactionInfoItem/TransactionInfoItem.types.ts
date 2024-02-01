import React from 'react';

export enum TransactionType {
  DEPOSIT = 'Deposit',
  WITHDRAW = 'Withdraw',
}

export enum TransactionState {
  TOKENS = 'Tokens',
  ACTIVITY = 'Activity',
}

export type TransactionInfoItemProps = {
  id: number;
  name: string;
  date: string;
  value: string;
  label: string;
  action: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export type TransactionInfoItemGroupedProps = {
  transactionInfoItemList: TransactionInfoItemProps[];
};

export type TransactionInfoItemListGrouped = {
  [month: string]: TransactionInfoItemProps[];
};
