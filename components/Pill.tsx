import { StyleSheet, Text, View } from 'react-native'

type Props = {
  text: string
}

export default function Pill({ text }: Props) {
  return (
    <View style={s.wrapper}>
      <Text style={s.text}>{text}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  wrapper: {
    backgroundColor: 'rgba(255,255,255, 0.15)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.20)',
    height: 40,
  },
})
