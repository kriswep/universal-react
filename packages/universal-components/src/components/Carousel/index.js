import React, { Component } from 'react';
import { Animated, View, Text, Dimensions, PixelRatio } from 'react-native'; // eslint-disable-line

import SideSwipe from 'react-native-sideswipe';
import { Card } from 'react-native-elements';

import data from './data';
import stylesFactory from './styles';

const { width } = Dimensions.get('window');
const styles = stylesFactory(width);

const PIXEL_RATIO = PixelRatio.get();

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SideSwipe
          data={data}
          style={{ width }}
          itemWidth={width - 60}
          threshold={80}
          contentOffset={12}
          renderItem={({ _itemIndex, _currentIndex, item, animatedValue }) => (
            <Animated.View
              style={{
                maxWidth: width - 60,
                transform: [
                  {
                    scale: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.9, 1],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}
            >
              {/* eslint-disable global-require */}
              <Card
                title={item.title}
                image={{
                  uri: `https://loremflickr.com/${Math.round(
                    width * PIXEL_RATIO,
                  )}/${Math.round((width / 2) * PIXEL_RATIO)}/${item.image}`,
                }}
                containerStyle={{ maxWidth: width }}
              >
                {/* eslint-enable */}
                <Text style={{ margin: 10 }}>{item.text}</Text>
              </Card>
            </Animated.View>
          )}
        />
      </View>
    );
  }
}
