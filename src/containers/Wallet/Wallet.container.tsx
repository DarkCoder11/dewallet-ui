import React, {useState} from 'react';

import {BuyIcon, DepositIcon, SendIcon} from '~/assets';
import {Button, TabView, TitleValue} from '~/components';
import {MainLayout} from '~/components/layouts/Main';
import {labels} from '~/components/views/TabView/TabViewUtils';

import styles from './Wallet.module.scss';

const WalletContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState(labels[1]);
  const hideDFC = activeTab !== labels[1];

  return (
    <div className={styles.container}>
      <MainLayout>
        <TitleValue title="TjkLk...5FGs" value="$2,934.32" />
        <div className={styles.container_group_wrapper}>
          <div className={styles.container_group}>
            <Button LeftIcon={DepositIcon}>Deposit</Button>
            <Button variant="secondary" LeftIcon={SendIcon}>
              Send
            </Button>
            <Button size="small" LeftIcon={BuyIcon}>
              Buy
            </Button>
          </div>
          <div className={styles.container_group_dfc}>
            {hideDFC && (
              <Button size="large" LeftIcon={DepositIcon}>
                Buy DFC
              </Button>
            )}
          </div>
          <TabView activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </MainLayout>
    </div>
  );
};

export default WalletContainer;
