import React from 'react';
import {
  blackbishop,
  blackKing,
  blackKinght,
  blackpawn,
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
      block[9 - 17] = (
        <div>
          <img src={blackpawn.img} />;
        </div>
      );
    }
  }

  return <div className="ChessBord-layout">{block}</div>;
};

export default Picelayout;
