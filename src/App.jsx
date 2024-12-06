import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import CategoryScreen from './Screens/CategoryScreen';
import Careers from './Components/careers';
import CompanyRoutes from './routes/CompanyRoutes';

function App() {
  return (
    <Router>
       
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/services/:categoryId" element={<CategoryScreen />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/company/*" element={<CompanyRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
