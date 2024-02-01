import React from 'react';

import {Skeleton} from '~/components';
import {MainLayout} from '~/components/layouts/Main';

import styles from './Skeleton.module.scss';

const SkeletonContainer: React.FC = () => (
  <div className={styles.container}>
    <MainLayout>
      <Skeleton />
    </MainLayout>
  </div>
);

export default SkeletonContainer;
