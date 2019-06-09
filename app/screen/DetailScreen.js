import React from 'react';
import { View } from 'react-native';
import DetailComponent from '../component/DetailComponent';

const Home = () => (
  <DetailComponent />
);

Home.navigationOptions = {
  title: 'Details',
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  headerRight: <View />,
};

export default Home;
