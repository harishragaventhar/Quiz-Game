import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Firstpage from './components/firstpage/firstpage';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Secondpage from './components/secondpage/secondpage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Firstpage/>]}/>
      <Route path='/secondpage' element={[<Secondpage/>]}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
