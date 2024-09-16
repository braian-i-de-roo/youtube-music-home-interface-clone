import { ComponentProps } from 'react'
import { Animated, SafeAreaView, StatusBar, StyleSheet } from 'react-native'

type Props = ComponentProps<typeof SafeAreaView> & {
  imageOpacity?: number | Animated.AnimatedNode
}

export default function Background({ imageOpacity, children }: Props) {
  return (
    <SafeAreaView style={s.wrapper}>
      <Animated.Image
        style={[s.image, { opacity: imageOpacity }]}
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        source={require('@/assets/images/background.png')}
        blurRadius={100}
      />

      {children}
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  wrapper: {
    backgroundColor: 'black',
    width: '100%',
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    position: 'absolute',
    aspectRatio: '1/1',
    width: '100%',
    height: undefined,
  },
})
