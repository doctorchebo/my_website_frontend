import React from 'react';
import './list.css';

export interface ListProps {
  items: any[];
  builder: (item: any) => JSX.Element;
  direction: 'vertical' | 'horizontal';
}

const List = ({ items, builder, direction = 'vertical' }: ListProps) => {
  const isHorizontal =
    direction === 'horizontal' && 'storybook-list-element--horizontal';
  return (
    <div className='list-container'>
      {items.map((item, index) => (
        <div
          className={['storybook-list-element', isHorizontal].join(' ')}
          key={index}
        >
          {builder(item)}
        </div>
      ))}
    </div>
  );
};

export default List;
