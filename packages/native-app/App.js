import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Input } from './dist';
import { Input as Input2 } from 'srs-universal-components';
// does not work imported right now

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        {/* <Input title="test" subtitle="1" /> */}
        <Input2 title="test2" subtitle="1" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
