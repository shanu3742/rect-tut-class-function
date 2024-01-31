
import { useState } from 'react';
import './App.css';
import { Counter } from './component/classedBasedAppr/Counter';
import MouseOverMultiMathOperator from './component/functionBasedAppr/EnterMulti/MouseOverMultiMathOperator';
import ClickMultiMathOperator from './component/functionBasedAppr/ClickMulti/ClickMultiMathOperator';

function App() {
  const [toggle,setToggle] = useState(false)
  return (
    <div className="App">
   {
    toggle &&   <Counter color='red' />
   }
     <button onClick={()=>setToggle(!toggle)}>Toggle</button>


     <div>--------------------------------------------------------------</div>
     <MouseOverMultiMathOperator />
     <ClickMultiMathOperator />

    </div>
  );
}

export default App;
