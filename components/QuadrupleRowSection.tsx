import { ComponentProps } from 'react'
import BaseSection from './BaseSection'
import { Item } from '@/types/Item'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import SmallItem from './SmallItem'
import {
  itemGap,
  pageHorizontalPadding,
  remainingItemWidthPercent,
  smallItemWidth,
} from '@/constants/Dimensions'

type Props = ComponentProps<typeof BaseSection> & {
  items: Item[]
}

export default function QuadrupleRowSection({ items, ...rest }: Props) {
  const numColumns = Math.ceil(items.length / 4)
  return (
    <View>
      <BaseSection {...rest}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled
          alwaysBounceVertical={false}
          /*
                        Enable snap scrolling without pagination,
                        because our items are smaller than the container
                    */
          snapToInterval={smallItemWidth + itemGap * 2}
          decelerationRate="fast"
          style={s.scroll}>
          <FlatList
            numColumns={numColumns}
            key={numColumns} // used here to allow changing number of columns on the fly
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={items}
            renderItem={(info) => (
              <SmallItem key={info.item.name} item={info.item} />
            )}
            contentContainerStyle={s.container}
            columnWrapperStyle={s.columnWrapper}
          />
        </ScrollView>
      </BaseSection>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingLeft: pageHorizontalPadding,
    paddingRight:
      pageHorizontalPadding + smallItemWidth * remainingItemWidthPercent, // needed to make the last column in the container not being centered
    gap: itemGap,
    flexDirection: 'row',
  },
  scroll: {
    height: 75 * 4 + itemGap * 3,
  },
  columnWrapper: {
    gap: itemGap,
    flexDirection: 'column',
  },
})
