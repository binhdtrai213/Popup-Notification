/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NotificationServices, requestUserPermission} from './src/utils';

export const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default App;
