import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./Components/Main";
import Explanation from './Components/Explanation';
import More from './Components/More';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/Explanation' element={<Explanation/>}/>
          <Route path='/More' element={<More/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
