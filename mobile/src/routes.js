import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'DevMap'
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: 'Github'
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#8ff803',
        headerStyle: {
          backgroundColor: '#ac054e'
        }
      }
    }
  )
);

export default Routes;
