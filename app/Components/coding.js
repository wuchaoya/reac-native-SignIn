import React from 'react';
import { StyleSheet, View } from 'react-native';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const Coding = () => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
  </View>
);

Coding.navigationOptions = {
  title: '签到',
};

export default Coding;
