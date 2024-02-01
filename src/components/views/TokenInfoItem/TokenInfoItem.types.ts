import React from 'react';

export type TokenInfoListProps = {
  id: number;
  name: string;
  value: string;
  label: string;
  date?: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};
