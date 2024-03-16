import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<About />}/>
        <Route path='/about' element={<Projects />}/>
      </Routes>
    </>
  );
}

export default App;
