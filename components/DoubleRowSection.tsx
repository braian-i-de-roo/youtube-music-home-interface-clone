import { ComponentProps } from 'react'
import BaseSection from './BaseSection'
import { Item } from '@/types/Item'
import { FlatList, ScrollView, StyleSheet } from 'react-native'
import MediumItem from './MediumItem'
import { itemGap, pageHorizontalPadding } from '@/constants/Dimensions'

type Props = ComponentProps<typeof BaseSection> & {
  items: Item[]
}

export default function DoubleRowSection({ items, ...rest }: Props) {
  const numColumns = Math.ceil(items.length / 2)
  return (
    <BaseSection {...rest}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled
        alwaysBounceVertical={false}>
        <FlatList
          numColumns={numColumns}
          key={numColumns} // used here to allow changing number of columns on the fly
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={items}
          renderItem={(info) => (
            <MediumItem key={info.item.name} item={info.item} />
          )}
          contentContainerStyle={s.container}
          columnWrapperStyle={s.columnWrapper}
        />
      </ScrollView>
    </BaseSection>
  )
}

const s = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingHorizontal: pageHorizontalPadding,
    gap: itemGap,
  },
  columnWrapper: {
    gap: itemGap,
  },
})
