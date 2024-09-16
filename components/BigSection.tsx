import { ComponentProps } from 'react'
import BaseSection from './BaseSection'
import { FlatList, StyleSheet } from 'react-native'
import { Item } from '@/types/Item'
import BigItem from './BigItem'
import { itemGap, pageHorizontalPadding } from '@/constants/Dimensions'

type Props = ComponentProps<typeof BaseSection> & {
  items: Item[]
}

export default function BigSection({ items, ...rest }: Props) {
  return (
    <BaseSection {...rest}>
      <FlatList
        horizontal
        data={items}
        renderItem={(info) => <BigItem key={info.item.name} item={info.item} />}
        contentContainerStyle={s.container}
      />
    </BaseSection>
  )
}

const s = StyleSheet.create({
  container: {
    paddingHorizontal: pageHorizontalPadding,
    gap: itemGap,
  },
})
