import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ImageScreen from './src/screens/ImageScreen';
import Screen from './src/screens/CounterScreen';
import Color from './src/screens/ColorScreen';
import Squere from './src/screens/SquereScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List:ListScreen,
    Conponents:ComponentScreen,
    Image: ImageScreen,
    Screen : Screen,
    Color : Color,
    Squere : Squere
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
