import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

export default function Header( ) {
 const cartData = useSelector((state)=>state.reducer)
 const [cartItem,setCartitem] = useState(0)
   const navigation = useNavigation()
 useEffect(()=>{setCartitem(cartData.length)},[cartData])

  return (
     
    < View style={styles.container}>
    <TouchableOpacity onPress={()=>navigation.navigate('UserList')}  >
       <Text style ={{fontSize:24,marginLeft:300}}> {cartItem}</Text>
      </TouchableOpacity>  
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     marginTop:20,
     backgroundColor:'yellow',
     width:'100%',
     height:50,
    
  },
});
