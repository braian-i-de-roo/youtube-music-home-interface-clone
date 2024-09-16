import { ComponentProps } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = ComponentProps<typeof View> & {
  name: string
  headerRightContent?: React.ReactNode
}

export default function BaseSection({
  name,
  children,
  headerRightContent,
  ...rest
}: Props) {
  return (
    <View style={s.wrapper} {...rest}>
      <View style={s.header}>
        <View>
          <Text style={s.sectionTitle}>{name}</Text>
        </View>
        <View>{headerRightContent}</View>
      </View>
      {children}
    </View>
  )
}

const s = StyleSheet.create({
  wrapper: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingBottom: 15,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
