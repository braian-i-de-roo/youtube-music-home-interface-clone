import { itemGap } from '@/constants/Dimensions'
import { Item } from '@/types/Item'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
  item: Item
}

export default function SmallItem({ item }: Props) {
  return (
    <View style={s.wrapper}>
      <View style={s.image} />
      <View style={s.textWrapper}>
        <Text style={s.title}>{item.name}</Text>
        <Text style={s.description}>{item.description}</Text>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  wrapper: {
    gap: itemGap,
    flexDirection: 'row',
  },
  image: {
    height: undefined,
    width: 75,
    aspectRatio: '1/1',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textWrapper: {
    justifyContent: 'center',
    width: 200,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    color: 'grey',
  },
})
