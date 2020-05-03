import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, AsyncStorage, StyleSheet } from 'react-native'


const styles=StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  }
})
const AuthLoading = ({navigation}) => {
  useEffect(()=>{
    AsyncStorage.getItem('token')
      .then(x=>{
        navigation.navigate(x ? 'Root': 'OnBoarding')
      })
  },[])

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  )
}

export default AuthLoading
