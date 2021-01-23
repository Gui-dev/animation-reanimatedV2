import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

export const Scroll: React.FC = () => {

  const scrollY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event: any) => {
    scrollY.value = event.contentOffset.y
  })

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 180],
        [300, 120],
        Extrapolate.CLAMP
      )
    }
  })

  const avatarStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [100, 150],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  })

  return (
    <>
      <StatusBar style="light" backgroundColor="#6C63FF"/>
      <SafeAreaView>        
        <Animated.ScrollView 
        contentContainerStyle={{ paddingTop: 300 }}
        onScroll={ scrollHandler }
        scrollEventThrottle={ 16 }
      >
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
          <Text style={styles.listItem}>Item da Lista</Text>
        </Animated.ScrollView>

        <Animated.View style={ [styles.header, headerStyle] }>
          <Animated.Image 
            style={ [styles.avatar, avatarStyle] }
            source={{ uri: 'https://github.com/Gui-dev.png' }} 
          />
          <Text style={ styles.name }>Gui Silva</Text>
        </Animated.View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 300,
    paddingVertical: 30,
    backgroundColor: '#6C63FF',
    overflow: 'hidden'
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor:'rgba(0, 0, 0, .2)'
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 16
  },

  listItem: {
    fontSize: 18,
    padding: 20
  }
})
