import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';

const App=()=> {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}  />
      </Routes>
    </HashRouter>
  );
}

export default App;
