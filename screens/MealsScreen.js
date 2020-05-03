import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import useFetch from '../hooks/useFetch'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  list: {
    alignSelf: 'stretch'
  }
})

const MealsScreen = ({ navigation }) => {
 const {loading,data:meals} = useFetch(`https://serverless.langdonhp435.now.sh/api/meals`)

  return (
    <View style={styles.container}>
      {
        loading
          ? <Text>Cargando ...</Text>
          : <FlatList
            style={styles.list}
            data={meals}
            keyExtractor={x => x._id}
            renderItem={({ item }) => (
              <ListItem
                onPress={() => navigation.navigate('Modal', { _id: item._id })}
                name={item.name}
              />
            )}
          />
      }
    </View>
  )
}

export default MealsScreen
