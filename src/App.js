import {HashRouter, Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home';

const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}  />
        <Route path="/books/search" exact element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
