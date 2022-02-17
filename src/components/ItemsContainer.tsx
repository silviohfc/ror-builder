import { styled } from "@stitches/react"
import items from '../data/itemsCollection.json'
import { Item } from "./Item"


const Container = styled('div', {
  height: '100%',
  minWidth: 400,
  paddingLeft: 32
})

const ItemsGrid = styled('div', {
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(auto-fit, minmax(64px, 64px));',
  gap: 8
})

export const ItemsContainer = () => {
  return (
    <Container>
      <h1>Items</h1>
      <ItemsGrid>
        {items.map(item => <Item data={item}/>)}
      </ItemsGrid>
    </Container>
  )
}