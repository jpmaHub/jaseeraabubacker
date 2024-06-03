
import AboutMe from './pages/Projects';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { NavigationRoutes } from './pages/NavigationRoutes';

function App() {
  return (
    <BrowserRouter basename={"/jaseeraabubacker"}>
      <NavigationRoutes />
    </BrowserRouter>
  )
}

export default App;
