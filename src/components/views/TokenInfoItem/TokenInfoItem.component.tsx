import React from 'react';

import {TokenInfoListProps} from './TokenInfoItem.types';
import styles from './TokenInfoItem.module.scss';

const TokenInfoItem: React.FC<TokenInfoListProps> = ({
  id,
  name,
  label,
  value,
  Icon,
}) => {
  return (
    <div className={styles.container} key={id}>
      <div className={styles.container_box}>
        <div className={styles.container_box_icon}>
          <Icon />
        </div>
        <div className={styles.container_box_info}>
          <div className={styles.container_box_info_label}>{label}</div>
          <div className={styles.container_box_info_name}>{name}</div>
        </div>
      </div>
      <div className={styles.container_box_info_value}>{value}</div>
    </div>
  );
};

export default TokenInfoItem;
