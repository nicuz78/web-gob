//CSS
import './App.css';

// Components
import MenuHeader from './Components/MenuHeader';
import News from './Components/News';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuHeader />
      </header>
      <News />
    </div>
  );
}

export default App;
