import React from 'react';
import { blackpawn } from './kati/Blackpice';

export const Chessbord2 = () => {
  const value = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const value2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  var block = [];
  for (let y = value.length - 1; y >= 0; y--) {
    for (let i = 0; i <= value2.length - 1; i++) {
      const number = y + i + 2;
      if (number % 2 === 0) {
        block.push(<div className="balck-block"></div>);
      } else {
        block.push(<div className="white-block"></div>);
      }
    }
  }

  return <div className="ChessBord-main">{block}</div>;
};
