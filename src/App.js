import logo from './logo.svg';
import './App.css';
import Button_One from './Button1'
import Button_Two from './Button2';
import Button_Three from './Button3'
import Button_Four from './Button4';
import Button_Five from './Button5';
import Button_Six from './Button6';

function App() {

  return (
    <div className="ArticleButtonList">
      <div className="article_button_grid_container">
        <div className="grid-left">
          <ul> 
            <Button_One />
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
    </div>
  );
}

export default App;
