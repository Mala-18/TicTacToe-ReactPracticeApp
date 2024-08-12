import './App.css';
import Square from './Square.js';

function App() {
  return(
    <div className="app">
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </div>
  );
}

export default App;
