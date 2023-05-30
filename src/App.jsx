import './styles/styles.scss'
import Header from "./components/NavBar"
import ItemListConainer from "./components/ItemListContainer";

function App() {

  return (
    <>
      <Header/>
      <ItemListConainer mensaje='Una tienda online de artículos de tecnología'/>
    </>
  )
}

export default App