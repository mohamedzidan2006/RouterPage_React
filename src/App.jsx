import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Interface from "./Interface";
 import Insta from './Insta';
 export default function App() {
  return (
     <div>
            <BrowserRouter>
            <Routes>
              <Route path='/' element={<Interface/>}></Route>
              <Route path='/insta' element={<Insta/>}></Route>
            </Routes>
            </BrowserRouter>
      </div>
   
  );
}

