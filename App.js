import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MealsScreen from './screens/MealsScreen'
import Modal from './screens/Modal'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import AuthLoading from './screens/AuthLoading'


//--------------
const OnBoardingNavigator = createStackNavigator({
  Login:LoginScreen,
  Register: RegisterScreen
},
{
  initialRouteName: 'Login'
})
//--------------

const AppNavigator = createStackNavigator({
  Meals: {
    screen: MealsScreen,
    navigationOptions:{
      title: 'Comidas disponibles'
    }
  }
}, {
  initialRouteName: 'Meals'
})

const RootStack = createStackNavigator({
  Main: AppNavigator,
  Modal: Modal
},{
  mode: 'modal',
  headerMode: 'none'
})

//--------------
const BaseStack = createSwitchNavigator({
  AuthLoading,
  OnBoarding: OnBoardingNavigator,
  Root: RootStack
},
{
  initialRouteName: 'AuthLoading'
})
//--------------

export default createAppContainer(BaseStack)