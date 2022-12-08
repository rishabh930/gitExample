import React, { useState } from 'react';
import './kati.css';

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
    <div className="pown-main" onClick={onclickpice}>
      <div
        className="pown"
        style={{ backgroundColor: active ? 'blue' : 'black' }}
      ></div>
      <div
        className="botton-pice"
        style={{ backgroundColor: active ? 'blue' : 'black' }}
      ></div>
    </div>
  );
};

export default Pown;
