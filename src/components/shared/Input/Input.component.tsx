import React from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';
import {TInputProps} from './Input.types';

const Input: React.FC<TInputProps> = ({
  name,
  Icon,
  placeholder,
  type = 'text',
  className = '',
  innerClassName = '',
  ...rest
}) => {
  const inputClasses = classNames(styles.container, className);

  const inputInnerClasses = classNames(styles.container__inner, {
    [innerClassName]: innerClassName,
  });

  return (
    <div className={inputInnerClasses}>
      <input
        {...rest}
        id={name}
        name={name}
        type={type}
        autoComplete="off"
        className={inputClasses}
        placeholder={placeholder}
      />
      {Icon && <Icon className={styles.container_icon} />}
    </div>
  );
};

export default Input;
