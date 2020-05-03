import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MealsScreen from './screens/MealsScreen'
import Modal from './screens/Modal'


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

export default createAppContainer(RootStack)