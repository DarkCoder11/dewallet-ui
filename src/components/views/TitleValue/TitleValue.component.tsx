import React from 'react';

import {TitleValueProps} from './TitleValue.types';
import styles from './TitleValue.module.scss';

const TitleValue: React.FC<TitleValueProps> = ({value, title}) => {
  const [wholePart, decimalPart] = value.split('.');

  return (
    <div className={styles.container}>
      <div className={styles.container_box}>
        <span className={styles.container_box_whole}>{wholePart}</span>
        <span className={styles.container_box_dot}>.</span>
        <span className={styles.container_box_decimal}>{decimalPart}</span>
      </div>
      <div className={styles.container_box_title}>{title}</div>
    </div>
  );
};

export default TitleValue;
