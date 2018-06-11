import React from 'react';
import Standard from './components/Header';

export const Header = ({ title, subtitle, style }) => (
  <Standard title={title} subtitle={`${subtitle} Native iOS`} style={style} />
);