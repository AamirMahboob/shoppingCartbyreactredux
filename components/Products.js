import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './redux/actions';
import { useEffect, useState } from 'react';

export default function Products(props) {

  const cartItems = useSelector((state) => state.reducer)
  const [isAdded, setIsAdded] = useState(false)

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item))
  }
  const handleRemoveFromCart = () =>{
    dispatch(removeFromCart(item.name))
  }
  useEffect(() => {
     let result = cartItems.filter((element)=>{
          return element.name === item.name
     });
     if(result.length){
      setIsAdded(true)
     }else{
         setIsAdded(false)
     }
  }, [cartItems])
  const item = props.item
  return (
    <View style={styles.container}>
      <View style={{ borderWidth: 1, borderColor: 'black', justifyContent: 'center', alignItems: 'center', padding: 30, margin: 20 }}>
        <Text>{item.name}</Text>
        <Text>{item.color}</Text>
        <Text>{item.price}</Text>
        <Image source={{ uri: item.image }} style={{ width: 110, height: 200, marginBottom: 10 }} />
        {
          isAdded ? <Button title='RemoveFromCart' onPress={() => handleRemoveFromCart(item)} /> :
            <Button title='AddtoCart' onPress={() => handleAddToCart(item)} />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
