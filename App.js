import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import Header from './components/Header';
import Products from './components/Products';
import { ScrollView } from 'react-native';
import store from './components/redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductWrapper from './components/ProductWrapper';
import UserList from './components/UserList';
 const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name='Home'  component={ProductWrapper}   />
        <Stack.Screen name='UserList' component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
     
  },
});
