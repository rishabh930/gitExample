import React from 'react';
import {
  blackbishop,
  blackKing,
  blackKinght,
  blackQueen,
  blackrook,
} from './kati/Blackpice';

const Picelayout = () => {
  const value = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const value2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  var block = [];
  var WPice = [blackrook, blackKing, blackKinght, blackQueen, blackbishop];
  console.log(WPice);
  for (let y = value.length - 1; y >= 0; y--) {
    for (let i = 0; i <= value2.length - 1; i++) {
      if (y === value.length - 1 && i === 0) {
        block.push(
          <div>
            <img src={blackrook.img} />
          </div>
        );
      }
    }
  }

  return <div className="ChessBord-layout">{block}</div>;
};

export default Picelayout;
