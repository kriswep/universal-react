import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Header, Input } from './universal-components';

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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <ScrollView style={styles.scrollView}>
          <Header title="test" subtitle="!" />
          <Input placeholder="1" />
          <Input placeholder="2" />
          <Input placeholder="3" />
          <Input placeholder="4" />
          <Input placeholder="5" />
          <Input placeholder="6" />
          <Input placeholder="7" />
          <Input placeholder="8" />
          <Input placeholder="9" />
          <Input placeholder="10" />
          <Input placeholder="11" />
          <Input placeholder="12" />
        </ScrollView>
      </View>
    );
  }
}
