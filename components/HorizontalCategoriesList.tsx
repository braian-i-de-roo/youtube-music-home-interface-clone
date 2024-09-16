import { FlatList, StyleSheet } from 'react-native'
import Pill from './Pill'

export default function HorizontalCategoriesList({}) {
  return (
    <FlatList
      data={['Workout', 'Energize', 'Feel good', 'Party', 'Commute']}
      renderItem={(info) => <Pill key={info.item} text={info.item} />}
      horizontal
      contentContainerStyle={s.wrapper}
      showsHorizontalScrollIndicator={false}
    />
  )
}

const s = StyleSheet.create({
  wrapper: {
    gap: 10,
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 10,
  },
})
