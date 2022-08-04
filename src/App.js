import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Mycart from './pages/customer/Mycart';
import Transaction from './pages/admin/Transaction';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


function App() {

  library.add(fas)

  return (
<BrowserRouter>
  <Routes>
    <Route path='/mycart' element={<Mycart/>}  />
    <Route path='/transaction' element={<Transaction/>}  />
    
  </Routes>
</BrowserRouter>
  );
}

export default App; 