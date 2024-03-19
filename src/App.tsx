import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  );
}

export default App;
