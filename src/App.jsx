import './styles/styles.scss'
import Header from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';

function App() {

  return (

    <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='*' element={<h2>404 not found</h2>}/>
        </Routes>
    </BrowserRouter>


  )
}

export default App