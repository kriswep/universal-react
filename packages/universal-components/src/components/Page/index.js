import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; // eslint-disable-line
import { Card, Button } from 'react-native-elements';

import Header from '../Header';
import Carousel from '../Carousel';
import styles from './styles';

const Page = ({ title, subtitle, style }) => (
  <View style={[styles.container, style]}>
    <Header title={title} subtitle={subtitle} />
    <Carousel />
  </View>
);

export default Page;
