import HorizontalCategoriesList from '@/components/HorizontalCategoriesList'
import TopHeader from '@/components/TopHeader'
import { Animated, StyleSheet, View } from 'react-native'

type Props = {
  scrollY: Animated.Value
  backgroundImageOpacity: Animated.AnimatedInterpolation<number>
}

export default function Header({ scrollY, backgroundImageOpacity }: Props) {
  const diffClamp = Animated.diffClamp<number>(scrollY, 0, 80) // we want the top header to show whenever the user scroll up, no matter where, so we clamp the max value for the vertical scroll

  const headerSeparatorOpacity = scrollY.interpolate<number>({
    // separator needs to be visible by the time the title of the next section touches the header border
    inputRange: [0, 25, 100],
    outputRange: [0, 0, 0.3],
    extrapolate: 'clamp',
  })

  const headerOpacity = diffClamp.interpolate({
    inputRange: [0, 70],
    outputRange: [1, 0],
  })

  const headerVerticalPosition = diffClamp.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -60],
  })

  return (
    <Animated.View
      style={[
        s.headerWrapper,
        { transform: [{ translateY: headerVerticalPosition }] },
      ]}>
      <View style={s.headerContent}>
        <TopHeader opacity={headerOpacity} />
        <HorizontalCategoriesList />
      </View>
      <Animated.Image // we duplicate the background image to make it look like it is above the header, but bellow the text
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        source={require('@/assets/images/background.png')}
        style={[s.headerImage, { opacity: backgroundImageOpacity }]}
        blurRadius={100}
      />
      <Animated.View
        style={[
          s.headerSeparator,
          { opacity: headerSeparatorOpacity }, // we need a separate component for the header border, regular border color props do not allow for opacity
        ]}
      />
    </Animated.View>
  )
}

const localConstants = {
  headerHeight: 140,
}

const s = StyleSheet.create({
  headerWrapper: {
    position: 'absolute',
    height: localConstants.headerHeight,
    backgroundColor: 'black',
    overflow: 'hidden', // bind the internal background image to the header
    zIndex: 100,
  },
  headerContent: {
    zIndex: 100,
  },
  headerImage: {
    height: undefined,
    width: '100%',
    position: 'absolute',
    aspectRatio: '1/1',
  },
  headerSeparator: {
    bottom: -1, // without this, there's an ugly, glitchy, black line between the separator and the content below it
    height: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: StyleSheet.hairlineWidth,
  },
})
