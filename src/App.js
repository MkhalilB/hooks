import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';

function App() {
  const [show,setShow] = useState(false)
  return (
    <div className="App">
      <h1>workshop hoocks</h1>
      <button onClick={()=>setShow(!show)}>{ show ? 'hide' : 'show'}</button>
      
     { show===true && <Counter/>}
    </div>
  );
}

export default App;
