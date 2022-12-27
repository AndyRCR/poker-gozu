import './App.css';
import PokerContainer from './components/PokerContainer/PokerContainer';
import GlobalStateContext from './context/GlobalStateContext';

function App() {

  return (
    <GlobalStateContext>
      <PokerContainer/>
    </GlobalStateContext>
  );
}

export default App;
