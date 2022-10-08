import logo from './logo.svg';
import './App.css';
import MovieList from './components2/MovieList';
import AddMovie from './components2/AddMovie';
import Filter from './components2/Filter';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Details from './components2/Details';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Details/:id' element={<Details />}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
