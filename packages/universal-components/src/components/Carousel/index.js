import React, { Component } from 'react';
import {
  Animated,
  Easing,
  View,
  Text,
  Dimensions,
  PixelRatio,
} from 'react-native'; // eslint-disable-line

import SideSwipe from 'react-native-sideswipe';
import { Card } from 'react-native-elements';

import data from './data';
import styles from './styles';

const { width } = Dimensions.get('window');

const PIXEL_RATIO = PixelRatio.get();

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SideSwipe
          data={data}
          style={{ width }}
          itemWidth={width}
          threshold={120}
          contentOffset={0}
          renderItem={({ item }) => (
            <View style={{ width, paddingHorizontal: 10 }}>
              {/* eslint-disable global-require */}
              <Card
                title={item.title}
                image={`https://loremflickr.com/${Math.round(
                  width * PIXEL_RATIO,
                )}/${Math.round((width / 2) * PIXEL_RATIO)}/${item.image}`}
                containerStyle={{ maxWidth: width }}
              >
                {/* eslint-enable */}
                <Text style={{ margin: 10 }}>{item.text}</Text>
              </Card>
            </View>
          )}
        />
      </View>
    );
  }
}
