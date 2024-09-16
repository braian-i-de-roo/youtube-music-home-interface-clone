import { Dimensions } from 'react-native'

export const itemGap = 15
export const pageHorizontalPadding = 25

export const remainingItemWidthPercent = 0.15 // we want to always show a glimpse of the next item in a scroll, so the user knows there's more, I blame people's unreasonable hate towards scrollbars for this

const windowWidth = Dimensions.get('window').width
const sectionInternalSize = windowWidth - pageHorizontalPadding

const bigSectionItemCount = 2 + remainingItemWidthPercent
export const bigItemWidth = sectionInternalSize / bigSectionItemCount - itemGap

const mediumSectionItemCount = 3 + remainingItemWidthPercent
export const mediumItemWidth =
  sectionInternalSize / mediumSectionItemCount - itemGap

const smallSectionItemCount = 1 + remainingItemWidthPercent
export const smallItemWidth =
  sectionInternalSize / smallSectionItemCount - itemGap
