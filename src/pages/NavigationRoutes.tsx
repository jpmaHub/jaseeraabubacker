import AboutMe from './AboutMe';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export function NavigationRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </Router>
  )
}
