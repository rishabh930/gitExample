import React from 'react';
import './Chessbord.css';
import Pown from './kati/pown';
const Chessbord = () => {
  return (
    <div className="ChessBord-main">
      <div id="1" className="first-line">
        <div id="11" className="white-block">
          <Pown />
        </div>
        <div id="12" className="balck-block"></div>
        <div id="13" className="white-block"></div>
        <div id="14" className="balck-block"></div>
        <div id="15" className="white-block"></div>
        <div id="16" className="balck-block"></div>
        <div id="17" className="white-block"></div>
        <div id="18" className="balck-block"></div>
      </div>
      <div id="2" className="first-line">
        <div id="21" className="balck-block"></div>
        <div id="22" className="white-block"></div>
        <div id="23" className="balck-block"></div>
        <div id="24" className="white-block"></div>
        <div id="25" className="balck-block"></div>
        <div id="26" className="white-block"></div>
        <div id="27" className="balck-block"></div>
        <div id="28" className="white-block"></div>
      </div>
      <div id="3" className="first-line">
        <div id="31" className="white-block"></div>
        <div id="32" className="balck-block"></div>
        <div id="33" className="white-block"></div>
        <div id="34" className="balck-block"></div>
        <div id="35" className="white-block"></div>
        <div id="36" className="balck-block"></div>
        <div id="37" className="white-block"></div>
        <div id="38" className="balck-block"></div>
      </div>
      <div id="4" className="first-line">
        <div id="41" className="balck-block"></div>
        <div id="42" className="white-block"></div>
        <div id="43" className="balck-block"></div>
        <div id="44" className="white-block"></div>
        <div id="45" className="balck-block"></div>
        <div id="46" className="white-block"></div>
        <div id="47" className="balck-block"></div>
        <div id="48" className="white-block"></div>
      </div>
      <div id="5" className="first-line">
        <div id="51" className="white-block"></div>
        <div id="52" className="balck-block"></div>
        <div id="53" className="white-block"></div>
        <div id="54" className="balck-block"></div>
        <div id="55" className="white-block"></div>
        <div id="56" className="balck-block"></div>
        <div id="57" className="white-block"></div>
        <div id="58" className="balck-block"></div>
      </div>
      <div id="6" className="first-line">
        <div id="61" className="balck-block"></div>
        <div id="62" className="white-block"></div>
        <div id="63" className="balck-block"></div>
        <div id="64" className="white-block"></div>
        <div id="65" className="balck-block"></div>
        <div id="66" className="white-block"></div>
        <div id="67" className="balck-block"></div>
        <div id="68" className="white-block"></div>
      </div>
      <div id="7" className="first-line">
        <div id="71" className="white-block"></div>
        <div id="72" className="balck-block"></div>
        <div id="73" className="white-block"></div>
        <div id="74" className="balck-block"></div>
        <div id="75" className="white-block"></div>
        <div id="76" className="balck-block"></div>
        <div id="77" className="white-block"></div>
        <div id="78" className="balck-block"></div>
      </div>
      <div id="8" className="first-line">
        <div id="81" className="balck-block"></div>
        <div id="82" className="white-block"></div>
        <div id="83" className="balck-block"></div>
        <div id="84" className="white-block"></div>
        <div id="85" className="balck-block"></div>
        <div id="86" className="white-block"></div>
        <div id="87" className="balck-block"></div>
        <div id="88" className="white-block"></div>
      </div>
    </div>
  );
};

export default Chessbord;
