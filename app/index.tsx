import Background from '@/components/Background'
import Header from '@/components/Header'
import SectionsManager from '@/components/SectionsManager'
import { Animated, StyleSheet } from 'react-native'

export default function Index() {
  const scrollY = new Animated.Value(0)

  const backgroundImageOpacity = scrollY.interpolate({
    // we only want to show the background image if we are almost at the top
    inputRange: [0, 80],
    outputRange: [1, 0],
  })

  return (
    <Background imageOpacity={backgroundImageOpacity}>
      <Header
        scrollY={scrollY}
        backgroundImageOpacity={backgroundImageOpacity}
      />
      <Animated.ScrollView
        contentContainerStyle={s.scrollViewContent}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y)
        }}>
        <SectionsManager />
      </Animated.ScrollView>
    </Background>
  )
}

const localConstants = {
  headerHeight: 140,
}

const s = StyleSheet.create({
  scrollViewContent: {
    paddingTop: localConstants.headerHeight, // padding needed to compensate for the absolute-positioned header
  },
})
