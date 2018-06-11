import React from 'react';
import Standard from './components/Header';

export const Input = ({ title, subtitle, style }) => (
  <Standard title={title} subtitle={`${subtitle} Native iOS`} style={style} />
);