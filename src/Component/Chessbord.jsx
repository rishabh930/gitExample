import React from 'react';
import './Chessbord.css';
import BishopB from './kati/BishopB';
import BishopW from './kati/BishopW';
import KingB from './kati/KingB';
import KingW from './kati/KingW';
import KnightB from './kati/KnightB';
import KnightW from './kati/KnightW';
import PawnW from './kati/PawnW';
import Pown from './kati/pown';
import QueenW from './kati/QueenW';
import QueenB from './kati/QweenB';
import RookB from './kati/RookB';
import RookW from './kati/RookW';
const Chessbord = () => {
  return (
    <div className="ChessBord-main">
      <div id="8" className="first-line">
        <div id="81" className="white-block">
          <RookB />
        </div>
        <div id="82" className="balck-block">
          <KnightB />
        </div>
        <div id="83" className="white-block">
          <BishopB />
        </div>
        <div id="84" className="balck-block">
          <QueenB />
        </div>
        <div id="85" className="white-block">
          <KingB />
        </div>
        <div id="86" className="balck-block">
          <BishopB />
        </div>
        <div id="87" className="white-block">
          <KnightB />
        </div>
        <div id="88" className="balck-block">
          <RookB />
        </div>
      </div>
      <div id="7" className="first-line">
        <div id="71" className="balck-block">
          <Pown />
        </div>
        <div id="72" className="white-block">
          <Pown />
        </div>
        <div id="73" className="balck-block">
          <Pown />
        </div>
        <div id="74" className="white-block">
          <Pown />
        </div>
        <div id="75" className="balck-block">
          <Pown />
        </div>
        <div id="76" className="white-block">
          <Pown />
        </div>
        <div id="77" className="balck-block">
          <Pown />
        </div>
        <div id="78" className="white-block">
          <Pown />
        </div>
      </div>
      <div id="6" className="first-line">
        <div id="61" className="white-block"></div>
        <div id="62" className="balck-block"></div>
        <div id="63" className="white-block"></div>
        <div id="64" className="balck-block"></div>
        <div id="65" className="white-block"></div>
        <div id="66" className="balck-block"></div>
        <div id="67" className="white-block"></div>
        <div id="68" className="balck-block"></div>
      </div>
      <div id="5" className="first-line">
        <div id="51" className="balck-block"></div>
        <div id="52" className="white-block"></div>
        <div id="53" className="balck-block"></div>
        <div id="54" className="white-block"></div>
        <div id="55" className="balck-block"></div>
        <div id="56" className="white-block"></div>
        <div id="57" className="balck-block"></div>
        <div id="58" className="white-block"></div>
      </div>
      <div id="4" className="first-line">
        <div id="41" className="white-block"></div>
        <div id="42" className="balck-block"></div>
        <div id="43" className="white-block"></div>
        <div id="44" className="balck-block"></div>
        <div id="45" className="white-block"></div>
        <div id="46" className="balck-block"></div>
        <div id="47" className="white-block"></div>
        <div id="48" className="balck-block"></div>
      </div>
      <div id="3" className="first-line">
        <div id="31" className="balck-block"></div>
        <div id="32" className="white-block"></div>
        <div id="33" className="balck-block"></div>
        <div id="34" className="white-block"></div>
        <div id="35" className="balck-block"></div>
        <div id="36" className="white-block"></div>
        <div id="37" className="balck-block"></div>
        <div id="38" className="white-block"></div>
      </div>
      <div id="2" className="first-line">
        <div id="21" className="white-block">
          <PawnW />
        </div>
        <div id="22" className="balck-block">
          <PawnW />
        </div>
        <div id="23" className="white-block">
          <PawnW />
        </div>
        <div id="24" className="balck-block">
          <PawnW />
        </div>
        <div id="25" className="white-block">
          <PawnW />
        </div>
        <div id="26" className="balck-block">
          <PawnW />
        </div>
        <div id="27" className="white-block">
          <PawnW />
        </div>
        <div id="28" className="balck-block">
          <PawnW />
        </div>
      </div>
      <div id="8" className="first-line">
        <div id="81" className="balck-block">
          <RookW />
        </div>
        <div id="82" className="white-block">
          <KnightW />
        </div>
        <div id="8c" className="balck-block">
          <BishopW />
        </div>
        <div id="84" className="white-block">
          <QueenW />
        </div>
        <div id="85" className="balck-block">
          <KingW />
        </div>
        <div id="86" className="white-block">
          <BishopW />
        </div>
        <div id="87" className="balck-block">
          <KnightW />
        </div>
        <div id="88" className="white-block">
          <RookW />
        </div>
      </div>
    </div>
  );
};

export default Chessbord;
