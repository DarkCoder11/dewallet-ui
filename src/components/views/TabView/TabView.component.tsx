import React from 'react';

import {TokenInfoItem} from '../TokenInfoItem';
import {Tabs} from '../Tabs';
import {TransactionInfoItem, TransactionState} from '../TransactionInfoItem';

import {TabViewProps} from './TabView.types';
import {labels, tokenInfoList, transactionInfoItemList} from './TabViewUtils';
import styles from './TabView.module.scss';

const TabView: React.FC<TabViewProps> = ({activeTab, setActiveTab}) => {
  const renderTokenItem = tokenInfoList.map((item) => {
    return <TokenInfoItem {...item} key={item.id} />;
  });

  const renderTransactionItem = Object.entries(transactionInfoItemList).map(
    ([key, value]) => (
      <div className={styles.container_transaction_month_wrapper} key={key}>
        <p className={styles.container_transaction_month}>{key}</p>
        <div>
          {value.map((item) => (
            <TransactionInfoItem {...item} key={item.id} />
          ))}
        </div>
      </div>
    ),
  );

  return (
    <React.Fragment>
      <div className={styles.container}>
        <Tabs
          labels={labels}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      {activeTab === TransactionState.TOKENS && (
        <div className={styles.container_token}>{renderTokenItem}</div>
      )}
      {activeTab === TransactionState.ACTIVITY && (
        <div className={styles.container_transaction}>
          {renderTransactionItem}
        </div>
      )}
    </React.Fragment>
  );
};

export default TabView;
