import React from "react";

const Osc2 =({change2, settings, changetype}) => {
    let { type, frequency, detune } = settings;
    return (
        <div className="control">
            <h2>osc2</h2>

            <div className="parameters">
                <h2>Frequency</h2>

                <input 
                value={frequency} 
                onChange={change2}
                 type="range" max="5000" 
                 id="frequency"
                 />

            </div>

            <div className="parameters">
                <h2>detune</h2>
                <input 
                value={detune} 
                onChange={change2} 
                type="range" 
                id="detune"
                />
            </div>
            <div className="parameters">
                <h2>wave</h2>
                <button id="sine" onClick={changetype} className={`${type==="sine" && "active" }`}>sine</button>
                <button id="triangle" onClick={changetype} className={`${type==="triangle" && "active"}`}>triangle</button>
                <button id="square" onClick={changetype} className={`${type==="square" && "active" }`}>square</button>
                <button id="sawtooth" onClick={changetype} className={`${type==="sawtooth"&& "active" }`}>sawtooth</button>
            </div>
        </div>
    );
}

export default Osc2;