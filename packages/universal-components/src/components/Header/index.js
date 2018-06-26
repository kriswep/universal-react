import React from 'react';
import { Text, View } from 'react-native'; // eslint-disable-line

import styles from './styles';

const Header = ({ title, subtitle, style }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

export default Header;
