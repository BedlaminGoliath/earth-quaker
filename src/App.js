import React, {useState} from "react";
import Osc1 from "./Components/Osc1";
import Filter from "./Components/Filter";
import './App.scss';

let actx = new AudioContext();
let out = actx.destination;
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

// osc1.start();

function App() {

  // const [osc1Freq, setosc1Freq] = useState(osc1.frequency.value);
  // const [osc1Detune, setOsc1Detune] = useState(osc1.detune.value);

  const [osc1Settings, setOsc1Settings]=useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type
  });

  const [filterSettings, setFilterSettings] = useState({
    frequency: filter.frequency.value,
    detune: filter.detune.value,
    type: filter.type,
    Q: filter.Q.value,
    gain: filter.gain.value
  })

  const changeOsc1 = e => {
    let{value, id} = e.target;
    setOsc1Settings({...osc1Settings, [id]: value});

    osc1[id].value = value;
  }

  
  const changeOsc1Type = (e)=> {
    let { id } = e.target;
    setOsc1Settings({...App.osc1Settings, type: id})
    osc1.type = id;
  }

  const changeFilter = e =>{
    let {value, id } = e.target;
    setFilterSettings({...filterSettings, [id]:value});
    filter[id].value = value;
  }

  const changeFilterType =e=>{
    let {id} = e.target;
    setFilterSettings({...filterSettings, type: [id]});
    filter.type = id;
  }
  // const changeOsc1Freq = e =>{
  //     // console.log(e.target.value);
  //     let {value} = e.target;
  //     setosc1Freq(value);
  //     osc1.frequency.value = value;
  // }

  // const changeOsc1Detune =e=>{
  //   let {value}=e.target;
  //   console.log(value);
  //   setOsc1Detune(value);
  //   osc1.detune.value=value;
  // }
  return (
    <div className="App">
      <h1>Sliders</h1>
      <button onClick={()=> osc1.start()}> Start </button>
      <button onClick={()=> osc1.stop()}> Stop </button>
      <Osc1 
      change={changeOsc1}
      settings={osc1Settings}
      changetype={changeOsc1Type}/> 
      <Filter
        change={changeFilter}
        settings={filterSettings}
        changeType={changeFilterType}
      />
    </div>
  );
}

export default App;
