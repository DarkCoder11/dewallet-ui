import {Dispatch, SetStateAction} from 'react';

import {TransactionState} from '../TransactionInfoItem';

export type TabViewProps = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<TransactionState>>;
};
