import logo from './logo.svg';
import './App.css';
import Button_one from './Button1'
import Button_Two from './Button2';

function App() {

  return (
    <div className="ArticleButtonList">
      <ul> 
        <Button_one />
        <Button_Two />
        <h3> Button 3 </h3>
      </ul>
    </div>
  );
}

export default App;
