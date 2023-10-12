import React, { useState } from 'react';
import './App.css';
import hookss from './components/hookss'


function App() {

  // increament button
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount(count + 1)
  }
// decreamnet button
  const decreament = () => {
    if (count > 0)
      setCount(count - 1)
  }

  //on click color will change
  const [color, setColor] = useState('green')
  const greenCloor = () => {
    setColor('green')
  }

  const blueColor = () => {
    setColor('blue')
  }

// on hover color will change
  const hoverbtn = () => {
    setColor('red')
  }


  const resetColorOnLeave = () => {
    setColor('pink');
  };


  // set your name
  const [name, setName]= useState('')
  

  return (
    <>
    <hookss/>
      <div style={{ borderRadius: 20, backgroundColor: color }} >
        <h1>hey hookss</h1>
        <button onClick={increament}>Clik Me to increament value</button>
        <button onClick={decreament}>Clik Me to decreament value</button>
        <p style={{ backgroundColor: 'white' }}>count: {count}</p>


        <button onClick={blueColor} disabled={color === 'blue'}> Change to blue</button>
        <button onClick={greenCloor} disabled={color === 'green'}>Change to green </button>
      </div>

      <div style={{ backgroundColor: color, borderRadius: 20 }}>
        <button onMouseEnter={hoverbtn} onMouseLeave={resetColorOnLeave}>Hover to change color</button>
      </div>


      <div style={{background:'red', borderRadius:20}}>

          <input type="text" placeholder='Enter Your Name' onChange={(e)=> setName(e.target.value)}/>

          <h1>Your Name Is : {name}</h1>


      </div>

    </>
  );
}

export default App;
