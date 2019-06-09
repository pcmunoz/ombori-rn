import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../app/screen/HomeScreen';
import DetailScreen from '../app/screen/DetailScreen';
import LoadingScreen from '../app/screen/LoadingScreen';

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTintColor: '#000',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
      },
    },
  },
);

const SwitchNav = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppStack,
  },
  {
    initialRouteName: 'Loading',
  },
);

export default createAppContainer(SwitchNav);
