import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from "../app/screen/HomeScreen";
import LoadingScreen from "../app/screen/LoadingScreen";

const AppStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
});

export default createAppContainer(createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppStack,
        },
        {
            initialRouteName: 'Loading',
        }
    )
);