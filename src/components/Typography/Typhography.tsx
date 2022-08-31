import React from 'react';
import './typhography.css';

export interface TyphographyProps {
  content?: string;
  type?: 'title' | 'description';
  style?: 'classic' | 'modern' | 'minimalist';
  size?:
    | 'small'
    | 'small-bold'
    | 'medium'
    | 'medium-bold'
    | 'large'
    | 'large-bold'
    | number
  position?: 'left' | 'right' | 'center' | 'justify';
  color?: 'green' | 'red' | 'black' | 'white' | 'gray' | string;
  crossedOut?: boolean;
}

const Typhography = ({
  content = 'typhography',
  type = 'description',
  style = 'modern',
  size = 'small',
  position = 'center',
  color = 'black',
  crossedOut = false,
}: TyphographyProps) => {
  const crossed = crossedOut && 'storybook-typography-crossedOut';
  const customColor = color.startsWith('#') && color;
  const sizeCustom = typeof(size)==='number' && size;
  return (
    <div
      style={{ color: `${customColor}`, fontSize: `${sizeCustom}rem`}}
      className={[
        'storybook-typography',
        `storybook-typography-${type}`,
        `storybook-typography-${style}`,
        `storybook-typography-${size}`,
        `storybook-typography-${position}`,
        `storybook-typography-${color}`,
        crossed,
      ].join(' ')}
    >
      {content}
    </div>
  );
};

export default Typhography;
