import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Page } from './universal-components';

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
          <Page title="test" subtitle="!" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
