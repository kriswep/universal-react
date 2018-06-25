import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; // eslint-disable-line
import { Card, Button } from 'react-native-elements';

import styles from './styles';
import Header from '../Header';
import Carousel from '../Carousel';

const Page = ({ title, subtitle, style }) => (
  <View style={[styles.container, style]}>
    <Header title={title} subtitle={subtitle} />
    <Carousel />
    <Card title="HELLO WORLD" image={require('../../img/mountain.jpg')}>
      <Text style={{ marginBottom: 10 }}>universal compononents for React</Text>
      <Button
        icon={{ name: 'code' }}
        backgroundColor="#03A9F4"
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="VIEW NOW"
      />
    </Card>
  </View>
);

export default Page;
