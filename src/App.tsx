
import AboutMe from './pages/Projects';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename={"/jaseeraabubacker"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
