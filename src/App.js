import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navbar from "./assets/Navbar";
import Navbaruser from "./assets/Navbaruser"
import Navbaradmin from './assets/Navbaradmin';
import Mycart from './components/Mycart';
import Transaction from './components/transaction';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


function App() {

  library.add(fas)

  return (
<BrowserRouter>
  <Routes>
    <Route path='/navbar' element={<Navbar/>}  />
    <Route path='/navbaruser' element={<Navbaruser/>}  />
    <Route path='/navbaradmin' element={<Navbaradmin/>}  />
    <Route path='/mycart' element={<Mycart/>}  />
    <Route path='/transaction' element={<Transaction/>}  />
    
  </Routes>
</BrowserRouter>
  );
}

export default App; 