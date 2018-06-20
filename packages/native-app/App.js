import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Header, Input } from './universal-components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    alignSelf: 'stretch',
    flex: 1,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Header title="test" subtitle="!" />
          <Input placeholder="1" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
