import { mediumItemWidth } from '@/constants/Dimensions'
import { Item } from '@/types/Item'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
  item: Item
}

export default function MediumItem({ item }: Props) {
  return (
    <View style={s.wrapper}>
      <View style={s.image} />
      <Text style={s.title} numberOfLines={2}>
        {item.name}
      </Text>
    </View>
  )
}

const s = StyleSheet.create({
  wrapper: {
    gap: 5,
    width: mediumItemWidth,
  },
  image: {
    height: undefined,
    width: '100%',
    aspectRatio: '1/1',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    maxWidth: mediumItemWidth,
    maxHeight: 50,
  },
})
