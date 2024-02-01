
import { useState } from 'react';
import './App.css';
import { Counter } from './component/classedBasedAppr/Counter';
import MouseOverMultiMathOperator from './component/functionBasedAppr/EnterMulti/MouseOverMultiMathOperator';
import ClickMultiMathOperator from './component/functionBasedAppr/ClickMulti/ClickMultiMathOperator';
import CounterComp from './component/functionBasedAppr/counter/CounterComp';
import Product from './component/functionBasedAppr/Product/product';

function App() {
  const [toggle,setToggle] = useState(false)
  return (
    <div className="App">
   {
    toggle &&   <Counter color='red' />
   }
     <button onClick={()=>setToggle(!toggle)}>Toggle</button>


     <div>--------------------------------------------------------------</div>
     <MouseOverMultiMathOperator buttonText='enter' />
     <ClickMultiMathOperator buttonText="click" />

     <div>+++++++++++++++   redux counter +++++++++++++++++++++++++++++++</div>
        <CounterComp />




    <div>++++++++++++ redux thunks ++++++++++++++++++++++++++++ </div>
    <Product />
    </div>




  );
}

export default App;
