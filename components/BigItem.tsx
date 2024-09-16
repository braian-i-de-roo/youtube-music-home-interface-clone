import { bigItemWidth } from '@/constants/Dimensions'
import { Item } from '@/types/Item'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
  item: Item
}

export default function BigItem({ item }: Props) {
  return (
    <View style={s.wrapper}>
      <View style={s.image} />
      <Text style={s.title}>{item.name}</Text>
      <Text style={s.description} numberOfLines={2}>
        {item.description}
      </Text>
    </View>
  )
}

const s = StyleSheet.create({
  wrapper: {
    gap: 5,
    width: bigItemWidth,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: '1/1',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: 'grey',
    maxWidth: bigItemWidth,
  },
})
