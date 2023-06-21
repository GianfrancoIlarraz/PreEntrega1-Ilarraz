import './styles/styles.scss'
import Header from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (

    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/productos' element={<ItemListContainer />} />
        <Route path='/productos/:categoryId' element={<ItemListContainer />} />
        <Route path='/detalle/:itemId' element={<ItemDetailContainer />}></Route>
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='*' element={<h2>404 not found</h2>} />
      </Routes>
    </BrowserRouter>


  )
}

export default App