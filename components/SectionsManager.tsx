import { Item } from '@/types/Item'
import BigSection from './BigSection'
import DoubleRowSection from './DoubleRowSection'
import QuadrupleRowSection from './QuadrupleRowSection'

function randomString(): string {
  let res = ''
  const availableCharacters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz '
  const newStringLength = Math.floor(Math.random() * (20 - 4) + 4)
  let counter = 0
  while (counter < newStringLength) {
    res += availableCharacters.charAt(
      Math.floor(Math.random() * availableCharacters.length)
    )
    counter += 1
  }
  return res
}

function randomItem(): Item {
  const name = randomString()
  const description = randomString()
  return {
    name,
    description,
    imageurl: '',
  }
}

function getRandomItems(min: number, max: number) {
  const newLength = Math.floor(Math.random() * (max - min)) + min
  const res = []
  for (let i = 0; i < newLength; i++) {
    res.push(randomItem())
  }
  return res
}

function RandomSingleSection() {
  const name = randomString()
  const items = getRandomItems(3, 10)
  return <BigSection name={name} items={items} />
}

function RandomDoubleSection() {
  const name = randomString()
  const items = getRandomItems(8, 24)
  return <DoubleRowSection name={name} items={items} />
}

function RandomQuadrupleSection() {
  const name = randomString()
  const items = getRandomItems(12, 20)
  return <QuadrupleRowSection name={name} items={items} />
}

export default function SectionsManager() {
  return (
    <>
      <RandomDoubleSection />
      <RandomSingleSection />
      <RandomQuadrupleSection />
      <RandomSingleSection />
      <RandomDoubleSection />
    </>
  )
}
