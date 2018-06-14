import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native'; // eslint-disable-line

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100%',
    overflow: 'hidden',
    padding: 16,
  },
  subtitle: {
    color: '#cccccc',
    fontSize: 24,
  },
  title: {
    color: '#000000',
    fontSize: 54,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

const Header = ({ title, subtitle, style }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

Header.propTypes = {
  subtitle: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Header;
