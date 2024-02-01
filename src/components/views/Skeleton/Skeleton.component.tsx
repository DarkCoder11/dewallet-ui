import React from 'react';

import styles from './Skeleton.module.scss';

const Skeleton: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.container_sum}>
      <div className={styles.container_sum_title} />
      <div className={styles.container_sum_subtitle} />
    </div>
    <div className={styles.container_actions}>
      <div className={styles.container_actions_deposit} />
      <div className={styles.container_actions_send} />
      <div className={styles.container_actions_buy} />
    </div>
    <div className={styles.container_actions_buy_dfc} />
    <div className={styles.container_items_box}>
      <div className={styles.container_items}>
        <div className={styles.container_items_wrapper}>
          <div className={styles.container_items_round} />
          <div className={styles.container_items_round_wrapper}>
            <div className={styles.container_items_round_value} />
            <div className={styles.container_items_round_name} />
          </div>
        </div>
        <div className={styles.container_items_right}>
          <div className={styles.container_items_right_value} />
          <div className={styles.container_items_right_date} />
        </div>
      </div>
      <div className={styles.container_items}>
        <div className={styles.container_items_wrapper}>
          <div className={styles.container_items_round} />
          <div className={styles.container_items_round_wrapper}>
            <div className={styles.container_items_round_value} />
            <div className={styles.container_items_round_name} />
          </div>
        </div>
        <div className={styles.container_items_right}>
          <div className={styles.container_items_right_value} />
          <div className={styles.container_items_right_date} />
        </div>
      </div>
      <div className={styles.container_items}>
        <div className={styles.container_items_wrapper}>
          <div className={styles.container_items_round} />
          <div className={styles.container_items_round_wrapper}>
            <div className={styles.container_items_round_value} />
            <div className={styles.container_items_round_name} />
          </div>
        </div>
        <div className={styles.container_items_right}>
          <div className={styles.container_items_right_value} />
          <div className={styles.container_items_right_date} />
        </div>
      </div>
    </div>
  </div>
);

export default Skeleton;
