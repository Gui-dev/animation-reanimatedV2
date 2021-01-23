import React from 'react'
import { SafeAreaView } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

export const Drag: React.FC = () => {

  const positionX = useSharedValue(0)
  const positionY = useSharedValue(0)

  const onGestureHandler = useAnimatedGestureHandler({
    onStart(event: any, cxt: any) {
      cxt.posX = positionX.value
      cxt.posY = positionX.value
    },
    onActive(event: any, cxt: any) {
      positionX.value = cxt.posX + event.translationX
      positionY.value = cxt.posY + event.translationY
    },
    onEnd() {
      positionX.value = withSpring(0)
      positionY.value = withSpring(0)
    }
  })

  const positionStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value }
      ]
    }
  })

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <PanGestureHandler
          onGestureEvent={ onGestureHandler }
        >
          <Animated.View 
            style={[
              { width: 150, height: 150, marginTop: 50, backgroundColor: 'red' },
              positionStyle
            ]} 
          />   
        </PanGestureHandler>
      </SafeAreaView>
    </>
  )
}
