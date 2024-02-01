import {BTCIcon, TetherIcon, TonIcon} from '~/assets';

import {TokenInfoListProps} from '../TokenInfoItem';
import {
  TransactionInfoItemListGrouped,
  TransactionState,
} from '../TransactionInfoItem';

const tokenInfoList: TokenInfoListProps[] = [
  {
    id: 0,
    Icon: TonIcon,
    name: 'Toncoin',
    label: '1,253 TON',
    value: '$2,889.32',
  },
  {
    id: 1,
    Icon: BTCIcon,
    name: 'Bitcoin',
    value: '$14.32',
    label: '100 DFC',
  },
  {
    id: 2,
    Icon: TetherIcon,
    name: 'Tether',
    value: '$12.46',
    label: '12.43 USDT',
  },
];

const transactionInfoItemList: TransactionInfoItemListGrouped = {
  October: [
    {
      id: 0,
      Icon: TonIcon,
      name: 'To TjkLk...5FGs',
      action: 'Withdraw',
      label: '1,253 TON',
      value: '9 TON',
      date: '19 Oct 18:03',
    },
    {
      id: 1,
      Icon: TonIcon,
      name: 'From mutantape.ton',
      action: 'Deposit',
      label: '1,253 TON',
      value: '9 TON',
      date: '19 Oct 18:03',
    },
  ],
  September: [
    {
      id: 1,
      Icon: TonIcon,
      name: 'Tether',
      action: 'Withdraw',
      value: '9 TON',
      label: '12.43 USDT',
      date: '19 Oct 18:03',
    },
  ],
  January: [
    {
      id: 2,
      Icon: TonIcon,
      name: 'Tether',
      action: 'Withdraw',
      value: '9 TON',
      label: '12.43 USDT',
      date: '19 Sep 18:03',
    },
  ],
};

const labels = [TransactionState.TOKENS, TransactionState.ACTIVITY];

export {tokenInfoList, transactionInfoItemList, labels};
