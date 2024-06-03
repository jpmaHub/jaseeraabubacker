import AboutMe from './Projects';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './Projects';
import Experience from './Experience';

export function NavigationRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-projects" element={<Projects />} />
        <Route path="/my-experience" element={<Experience />} />
      </Routes>
    </Router>
  )
}
