import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../app/screen/HomeScreen';
import LoadingScreen from '../app/screen/LoadingScreen';

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
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
    initialRouteName: 'App',
  },
);

export default createAppContainer(SwitchNav);
