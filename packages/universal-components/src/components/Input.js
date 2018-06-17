import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native'; // eslint-disable-line

import { Calendar } from '../deps/react-native-calendars';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    maxWidth: '100%',
    overflow: 'hidden',
    padding: 16,
  },
  input: {
    backgroundColor: '#eee',
    color: '#000000',
    borderColor: '#eee',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 4,
    padding: 8,
    margin: 8,
    fontSize: 16,
  },
});

const Input = props => (
  <View style={[styles.container, props.style]}>
    <TextInput {...props} style={styles.input} />
    <Calendar />
  </View>
);

export default Input;
