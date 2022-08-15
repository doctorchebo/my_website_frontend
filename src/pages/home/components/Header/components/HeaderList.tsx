import React from 'react';
import { NavLink } from 'react-router-dom';

export interface IHeaderItem {
  route: string;
  content: string;
}

export interface IHeader {
  items: IHeaderItem[];
}

const HeaderList = ({ items }: IHeader) => {
  return (
    <>
      {items.map((item, index) => (
        <NavLink key={index} to={item.route}>
          {item.content}
        </NavLink>
      ))}
    </>
  );
};

export default HeaderList;
