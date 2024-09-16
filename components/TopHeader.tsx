import { Animated, StyleSheet, Text, View } from 'react-native'

type Props = {
  opacity: number | Animated.AnimatedNode
}

export default function TopHeader({ opacity }: Props) {
  return (
    <Animated.View style={[s.wrapper, { opacity: opacity }]}>
      <View style={s.leftSection}>
        <Text style={s.sectionTitle}>Music</Text>
      </View>
      <View style={s.rightSection}>
        <View style={s.rightSectionItem}></View>
        <View style={s.rightSectionItem}></View>
        <View style={s.rightSectionItem}></View>
      </View>
    </Animated.View>
  )
}

const s = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  sectionTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 20,
  },
  rightSectionItem: {
    backgroundColor: 'white',
    width: 30,
    aspectRatio: '1/1',
    height: undefined,
    borderRadius: 50,
  },
})
