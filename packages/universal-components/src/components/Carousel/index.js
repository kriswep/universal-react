import React, { Component } from 'react';
import {
  Animated,
  Easing,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'; // eslint-disable-line

import SideSwipe from 'react-native-sideswipe';
import { Card, Badge } from 'react-native-elements';

const { width } = Dimensions.get('window');
const data = [1, 2, 3, 4, 5];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Center Aligned</Text>
        <SideSwipe
          data={data}
          style={{ width, maxHeight: 225 }}
          itemWidth={width}
          threshold={120}
          contentOffset={0}
          renderItem={({ item }) => (
            <View style={{ width, paddingHorizontal: 10 }}>
              <Card
                title="Local Modules"
                containerStyle={{ maxWidth: width, height: 225 }}
              >
                <Badge value={item} />
                <Text style={{ marginTop: 10 }}>
                  Science has not yet mastered prophecy. We predict too much for
                  the next year and yet far too little for the next 10. I don't
                  know what you could say about a day in which you have seen
                  four beautiful sunsets.
                </Text>
              </Card>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
