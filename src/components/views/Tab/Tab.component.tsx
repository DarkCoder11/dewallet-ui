import classNames from 'classnames';

import {Button} from '~/components/shared';

import {TabProps} from './Tab.types';
import styles from './Tab.module.scss';

const Tab: React.FC<TabProps> = ({isActive, label, onClick}) => {
  const tablClasses = classNames(styles.tab, {
    [styles.tab_active]: isActive,
  });

  return (
    <Button className={tablClasses} onClick={onClick}>
      {label}
    </Button>
  );
};

export default Tab;
