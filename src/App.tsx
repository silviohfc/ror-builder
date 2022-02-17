import { styled } from '@stitches/react'
import { LeftPanel } from './components/LeftPanel'
import { BuildItemsContainer } from './components/BuildItemsContainer'
import { ItemsContainer } from './components/ItemsContainer'
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
      <ItemsContainer />
    </Container>
  )
}

export default App