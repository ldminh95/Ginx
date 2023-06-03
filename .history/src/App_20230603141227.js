import logo from './logo.svg';
import './App.css';
import productTitle from './title/Product_title.js'



function App() {
  return (
    <div className="App">
      <productTitle
        {titleH1(Our Products)}
      />
    </div>
  );
}

export default App;
