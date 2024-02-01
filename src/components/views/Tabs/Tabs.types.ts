import {Dispatch, SetStateAction} from 'react';

import {TransactionState} from '../TransactionInfoItem';

export type TabsProps = {
  labels: string[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<TransactionState>>;
};
