import React from 'react'

const Filter = ({change, settings, changetype}) => {
    const { frequency, detune, Q, gain, type}=settings;
  return (
    <div className='control'>
        <h2>Filter</h2>
        <div className="parameters">

            <h3>frequency</h3>
            <input value ={frequency}type="range" onChange={change} id="frequency" max="1000" ></input>
        </div>
        <div className="parameters">
            <h3>detune</h3>
            <input value ={detune} type="range" onChange={change} id="detune"></input>
        </div>
        <div className="parameters">
            <h3>Q</h3>
            <input value = {Q} type="range" onChange={change} id="Q" max="10"></input>
        </div>
        <div className="parameters">
            <h3>gain</h3>
            <input value={gain}  type="range" onChange={change} id="gain" max="10"></input>
        </div>
        <div className="parameters">
            <h3>type</h3>
            <button onClick={changetype} id="lowpass" className={`${type==="lowpass"&&"active"}`}>lowpass</button> 
            <button onClick={changetype} id="highpass" className={`${type==="highpass"&&"active"}`}>highpass</button> 
            <button onClick={changetype} id="notchpass" className={`${type==="notchpass"&&"active"}`}>notch</button> 
            <button onClick={changetype} id="lowshelf" className={`${type==="lowshelf"&&"active"}`}>lowshelf</button> 
            <button onClick={changetype} id="highshelf" className={`${type==="highshelf"&&"active"}`}>highshelf</button> 
        </div>
    </div>
  );
};

export default Filter