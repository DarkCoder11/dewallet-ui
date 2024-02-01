import React, {HTMLInputTypeAttribute} from 'react';

export type TInputProps = {
  value: string;
  name: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  placeholder?: string;
  innerClassName?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
