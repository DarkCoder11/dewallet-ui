import React from 'react';

import {CircleDotIcon} from '~/assets';
import {Button} from '~/components';

import styles from './Header.module.scss';

const Header: React.FC = () => (
  <header className={styles.container}>
    <Button variant="ghost" className={styles.container_button}>
      Cancel
    </Button>
    <div className={styles.container_head}>
      <span className={styles.container_head_title}>DeWallet</span>
      <span className={styles.container_head_bot}>bot</span>
    </div>
    <CircleDotIcon />
  </header>
);

export default Header;
