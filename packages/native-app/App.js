import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Header, Input } from './universal-components';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <ScrollView style={styles.scrollView}>
          <Header title="test" subtitle="!" />
          <Input placeholder="..." />
        </ScrollView>
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
    paddingTop: 40,
  },
  scrollView: {
    alignSelf: 'stretch',
    flex: 1,
  },
});
