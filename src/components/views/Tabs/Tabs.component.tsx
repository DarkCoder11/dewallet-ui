import React from 'react';
import classNames from 'classnames';

import Tab from '../Tab/Tab.component';
import {TransactionState} from '../TransactionInfoItem';

import {TabsProps} from './Tabs.types';
import styles from './Tabs.module.scss';

const Tabs: React.FC<TabsProps> = ({labels, activeTab, setActiveTab}) => {
  const tabsRenderer = labels.map((label, index) => {
    const isActive = activeTab === label;
    const tabClasses = classNames(styles.container_tabs, {
      [styles.container_tabs_active]: isActive,
    });

    const handleTabClick = () => {
      setActiveTab(label as TransactionState);
    };

    return (
      <div key={index} className={tabClasses}>
        <Tab
          key={label}
          label={label}
          isActive={isActive}
          onClick={handleTabClick}
        />
      </div>
    );
  });

  return <div className={styles.container}>{tabsRenderer}</div>;
};

export default Tabs;
