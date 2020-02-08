import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginPage from '../components/login-page';
import SplashScreen from '../components/splash-screen';
import BasePage from '../components/base-page';

const stackNavigator = createStackNavigator({
  SplashScreen: SplashScreen,
  LoginPage: LoginPage,
  BasePage: BasePage,
}, {headerMode: 'none'});

export default createAppContainer(stackNavigator);
