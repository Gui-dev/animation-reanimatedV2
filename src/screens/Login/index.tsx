import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import 
  Animated, 
  { 
    useAnimatedStyle, 
    useSharedValue, 
    withTiming, 
    Easing, 
    interpolate,
    Extrapolate 
} from 'react-native-reanimated'

import hero from './../../assets/hero.png'

export const Login: React.FC = () => {
  const titlePosition = useSharedValue(30)
  const imagePosition = useSharedValue(-30)

  useEffect(() => {
    imagePosition.value = withTiming(0, { duration: 500 }, () => {
      titlePosition.value = withTiming(-320, { duration: 1000, easing: Easing.bounce })
    })
  }, [])

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: titlePosition.value }],
      opacity: interpolate(
        titlePosition.value,
        [30, 0],
        [0, 1],
        Extrapolate.CLAMP
      )
    }
  })

  const heroStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: imagePosition.value }]
    }
  })

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#222"/>
      <Animated.Image source={ hero } style={ [styles.hero, heroStyle] }/>
      <Animated.Text style={[styles.title, titleStyle]}>Hello World</Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hero: {
    width: 280,
    height: 200,
    marginBottom: 40
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF'
  }
})
