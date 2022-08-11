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
    | 'large-bold';
  position?: 'left' | 'right' | 'center';
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
  return (
    <div
      style={{ color: `${customColor}` }}
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
