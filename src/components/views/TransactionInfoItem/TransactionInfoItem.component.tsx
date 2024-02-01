import React from 'react';
import classNames from 'classnames';

import {DecreaseIcon, IncreaseIcon} from '~/assets';

import {
  TransactionInfoItemProps,
  TransactionType,
} from './TransactionInfoItem.types';
import styles from './TransactionInfoItem.module.scss';

const TransactionInfoItem: React.FC<TransactionInfoItemProps> = ({
  id,
  name,
  date,
  Icon,
  value,
  action,
}) => {
  const isDeposit = action === TransactionType.DEPOSIT;

  const actionsClasses = classNames(styles.container_box_info_value_nest, {
    [styles.container_box_info_value_nest_deposit]: isDeposit,
  });

  return (
    <React.Fragment>
      <div className={styles.container} key={id}>
        <div className={styles.container_box}>
          <div className={styles.container_box_icon}>
            <Icon />
          </div>
          <div className={styles.container_box_icon_action}>
            {isDeposit ? <IncreaseIcon /> : <DecreaseIcon />}
          </div>
          <div className={styles.container_box_info}>
            <div className={styles.container_box_info_label}>{action}</div>
            <div className={styles.container_box_info_name}>{name}</div>
          </div>
        </div>
        <div className={styles.container_box_info_value}>
          <span className={actionsClasses}>
            {isDeposit ? `-${value}` : `+${value}`}
          </span>
          <span className={styles.container_box_info_value_date}>{date}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TransactionInfoItem;
