import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Chessbord from './Component/Chessbord';
import DargandDrop from './Eaxmple/DargandDrop';
import { Chessbord2 } from './Component/Chessbord2';
import Picelayout from './Component/Picelayout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Chessbord />
      <Chessbord2 />

      <DargandDrop />
    </div>
  );
}

export default App;
