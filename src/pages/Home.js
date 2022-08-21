import React from 'react';
import ButtonOne from '../components/Button1';
import ButtonTwo from '../components/Button2';
import ButtonThree from '../components/Button3';
import ButtonFour from '../components/Button4';
import ButtonFive from '../components/Button5';
import ButtonSix from '../components/Button6';

const Home = () => {
  return (
    <div className="ArticleButtonList">
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
            <a href='/invest-articles'><ButtonOne /></a>
            <ButtonTwo />
            <ButtonThree />
          </ul>
        </div>
        <div className="grid-right">
          <ul>
            <ButtonFour />
            <ButtonFive />
            <ButtonSix />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home