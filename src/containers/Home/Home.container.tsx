import React, {useState, useEffect, useRef} from 'react';

import {WalletContainer} from '../Wallet';
import SkeletonContainer from '../Skeleton/Skeleton.container';

const HomeContainer: React.FC = () => {
  const [showInitialSkeleton, setShowInitialSkeleton] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setShowInitialSkeleton(false);
    }, 1000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (showInitialSkeleton) return <SkeletonContainer />;

  return <WalletContainer />;
};

export default HomeContainer;
