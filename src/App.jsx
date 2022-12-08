import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Chessbord from './Component/Chessbord';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Chessbord />
    </div>
  );
}

export default App;
