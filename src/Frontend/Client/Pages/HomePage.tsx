import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Sidebar from '../Sidebar/Sidebar'

const HomePage = () => {
  return (
     <View style={styles.container}>
      <Sidebar />
      <View style={styles.content}>
        <Text style={styles.contentText}>Dashboard content</Text>
      </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },

  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#111113',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderColor: '#f4f4',
  },

  contentText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});