import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Button} from 'react-native';
 
import Header from './Header';
 
import Products from './Products';
import { ScrollView } from 'react-native';
 
import store from './redux/store'
import { Provider } from 'react-redux';

const products = [
  {
      id:1,
      name:'iphone',

      color:'black',
      price: '20000',
      image : 'https://cdn.pixabay.com/photo/2017/04/18/01/28/smartphone-2237421_1280.png'
  },
  {
    id:2,
    name:'Nokia',
    color:'blac',
    price: '20000',
    image : 'https://cdn.pixabay.com/photo/2017/04/18/01/28/smartphone-2237421_1280.png'
},
{
  id:3,
  name:'Samsung',
  color:'blac',
  price: '20000',
  image : 'https://cdn.pixabay.com/photo/2017/04/18/01/28/smartphone-2237421_1280.png'
},
]


export default function ProductWrapper() {

  return (
    
    <Provider store={store} >
      <View style={styles.container}>
         
       <Header />
       <ScrollView contentContainerStyle = {{flexGrow:1, height:'auto'}} >
       {products.map((item)=><Products    item={item}/>)}
       </ScrollView>
       
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
     
  },
});
