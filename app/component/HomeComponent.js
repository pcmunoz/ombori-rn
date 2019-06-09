import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const Home = ({ users }) => (
  <View style={styles.container}>
    {console.log(users)}
    <Text style={styles.welcome}>
        Welcome to React Native!
    </Text>
    <Text style={styles.instructions}>
        To get started, edit App.js Please
    </Text>
    <Text style={styles.instructions}>
      {instructions}
    </Text>
  </View>
);

Home.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
