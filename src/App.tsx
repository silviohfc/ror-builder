import { Item } from "./components/Item"
import items from './data/itemsCollection.json'

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      {items.map(item => <Item data={item}/>)}
    </div>
  )
}

export default App