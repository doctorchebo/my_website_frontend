import React, { ReactNode } from 'react';
import './container.css';

export interface IContainer {
  width: number;
  height: number;
  children?: ReactNode;
}

const Container = ({ width, height, children }: IContainer) => {
  return (
    <div className='container' style={{ width: `${width}rem`, height: `${height}rem` }}>
      {children}
    </div>
  );
};

export default Container;
