
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import { Route, Routes, HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
