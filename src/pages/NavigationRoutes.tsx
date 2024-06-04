import AboutMe from './Projects';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './Projects';
import Experience from './Experience';
import References from './References';

export function NavigationRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-projects" element={<Projects />} />
        <Route path="/my-experience" element={<Experience />} />
        <Route path="/references" element={<References />} />
      </Routes>
  )
}
