import { styled } from '@stitches/react'
import { Item } from "./components/Item"
import { LeftPanel } from './components/LeftPanel'
import { BuildItemsContainer } from './components/BuildItemsContainer'
import './StyleReset.css'

const Container = styled('div', {  
  height: '100vh',
  display: 'flex',
  justifyItems: 'space-between'
})

function App() {
  return (
    <Container>
      <LeftPanel />
      <BuildItemsContainer />
    </Container>
  )
}

export default App