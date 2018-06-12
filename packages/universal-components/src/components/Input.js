import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, View, TextInput } from 'react-native';

const Input = (props) => (
  <View style={[styles.container, props.style]}>
    <TextInput {...props} style={styles.input} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
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
    fontSize: 16,
  },
});

export default Input;