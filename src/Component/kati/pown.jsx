import React, { useState } from 'react';
import './kati.css';
import pawn from '../../assets/pawn_b.png';

const Pown = () => {
  const [active, setactive] = useState(false);
  const onclickpice = () => {
    if (active == false) setactive(true);
    else setactive(false);

    console.log(active);
  };
  const dragStart = (e) => {
    dragItem.current = positon;
    console.log(e.target.innrHTML);
  };
  const dragEnter = () => {
    dragOverItem.current = positon;
    console.log(e.target.innrHTML);
  };
  return (
    <div>
      <div>
        <img src={pawn} alt="pawn-b" onClick={onclickpice} />
      </div>
    </div>
  );
};

export default Pown;
