import './App.css';
import Home from './pages/Home';
import InvestingPage from './pages/InvestingPage';
import Signin from './pages/Signin';
import SignOut from './pages/SignOut';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Ubuntu:ital,wght@1,700&display=swap" rel="stylesheet"></link>
      <Router>
        <Routes>
          <Route path="/" element={<div><Home /></div>} />
          <Route path='/invest-articles' element={<div><InvestingPage /></div>} />
          <Route path="/sign-in" element={<div><Signin /></div>} />
          <Route path="/sign-up" element={<div><SignOut /></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
