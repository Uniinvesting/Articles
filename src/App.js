import logo from './logo.svg';
import './App.css';
import Button_One from './Button1'
import Button_Two from './Button2';
import Button_Three from './Button3'
import Button_Four from './Button4';
import Button_Five from './Button5';
import Button_Six from './Button6';
import Investing_Page from './InvestingPage';
import Signin from './Signin';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="ArticleButtonList">
      <Router>
            <Routes>
              <Route path='/invest-articles' 
              element={
                <div>
                  <Investing_Page />
                </div>
              } />
              </Routes>
          </Router>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Ubuntu:ital,wght@1,700&display=swap" rel="stylesheet"></link>
      <div className="TitleText">
        <h1> Expand your Knowledge in Finance 🧠</h1>
        <p> Learn about everything related to finance ranging from how to save, to making money
          to live a life that you want. This is why we're here, with these <b>Courses</b> and <b>Articles</b> from every Sector, be confident 
          about money <br /> <em> no matter where you come from.</em>
        </p>
      </div>
      <div className="article_button_grid_container">
        <div className="grid-left">
          <ul> 
            <a href='/invest-articles'><Button_One /></a>
            <Button_Two />
            <Button_Three />
          </ul>
        </div>
        <div className="grid-right">
          <ul>
            <Button_Four />
            <Button_Five />
            <Button_Six />
          </ul>
        </div>
      </div>

      <Signin />
    </div>
  );
}

export default App;
