import React, { HTMLAttributes, ReactChild, FC } from 'react';

import './index.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Button: FC<Props> = ({ children }) => {
  return <button className="button">{children}</button>;
};
