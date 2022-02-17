import { styled } from '@stitches/react'
import { LeftPanel } from './components/LeftPanel'
import { BuildItemsContainer } from './components/BuildItemsContainer'
import { ItemsContainer } from './components/ItemsContainer'
import './StyleReset.css'

const Container = styled('div', {  
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '296px 1fr 1fr',
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