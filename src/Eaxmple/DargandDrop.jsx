import React, { useState } from 'react';

import im from '../../public/pawn_w.png';
import PawnW from '../Component/kati/PawnW';
import { BalcPown } from './IMG';
const DargandDrop = () => {
  const [active, setActive] = useState(false);
  console.log();

  const p = {
    id: 'pawnW',
    img: '../../public/pawn_w.png',
  };

  const value = [1, 2];
  const value2 = ['a', 'b'];

  var bock = [];
  for (let i = 0; i <= value2.length - 1; i++) {
    for (let y = value.length - 1; y >= 0; y--) {
      bock.push(
        <div
          style={{ width: '100px', height: '100px', border: '1px solid  ' }}
        ></div>
      );
    }
  }

  const onActive = () => {
    if (active == false) setActive(true);
    else setActive(false);
  };

  const ar = ['2', '3', '4', '5'];
  const piceM = () => {
    bock[0] = p.img;
  };
  console.log(p);
  console.log(bock);
  const allowDrop = (e) => {
    e.preventDefault();
  };
  const drag = (e) => {
    e.dataTransfer.setData('text', e.target.id);
    console.log(e.target.id);
  };
  const drop = (e) => {
    e.preventDefault();
    var data = e.dataTransfer.getData('text');

    e.target.appendChild(document.getElementById(data));
    console.log(document.getElementById(data));
  };
  return (
    <div>
      <div
        style={{ width: '100px', height: '100px', border: '2px solid white' }}
        id="1"
        onDragOver={allowDrop}
        onDrop={drop}
      ></div>
      <div>
        <div>
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: 'blue',
              borderRadius: '50%',
            }}
          ></div>
        </div>
        <div>
          <img
            src={BalcPown.img}
            id={BalcPown.id}
            style={{ backgroundColor: active ? 'green' : '' }}
            onDragStart={drag}
            onClick={onActive}
          />
        </div>
      </div>
      <div className="chess-block" onDrop={drop} onDragOver={allowDrop}>
        {bock}
      </div>
    </div>
  );
};

export default DargandDrop;
