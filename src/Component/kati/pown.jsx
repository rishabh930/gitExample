import React from 'react';
import './kati.css';
const onclickpice=()=>{
    console.log('click')
    
}
const Pown = () => {
  return (
    <div className="pown-main" onClick={onclickpice}>
      <div className="pown"></div>
      <div className='botton-pice'></div>;
    </div>
  );
};

export default Pown;
