import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import App from './App'
import TodoItem from './components/todoItem'

const screens = {
    Home: {
        screen: App
    },
    TodoItem: {
        screen: TodoItem
    }
}

const AppNavigator = createStackNavigator(screens);

export default createAppContainer(AppNavigator)