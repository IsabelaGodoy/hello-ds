import React, { HTMLAttributes, ReactChild, FC } from 'react';

import './index.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  variant: string;
}

export const Button: FC<Props> = ({ children, variant }) => {
  return <button className={`button button-${variant}`}>{children}</button>;
};
