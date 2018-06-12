import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    maxWidth: '100%',
    overflow: 'hidden',
    padding: 16,
  },
  contentContainer: {
    alignItems: 'stretch',
    flex: 1,
    padding: 16,
  },
  image: {
    height: 150,
    width: 150,
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