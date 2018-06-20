import React from 'react';
import Standard from './components/Header';

export const Header = ({ title, subtitle, style }) => (
  <Standard
    title={title}
    subtitle={`${subtitle} Native Android`}
    style={style}
  />
);
export { default as Input } from './components/Input';
export { default as Page } from './components/Page';
