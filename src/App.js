
import { useRef, useState } from 'react';
import './App.css';
import { Counter } from './component/classedBasedAppr/Counter';
import MouseOverMultiMathOperator from './component/functionBasedAppr/EnterMulti/MouseOverMultiMathOperator';
import ClickMultiMathOperator from './component/functionBasedAppr/ClickMulti/ClickMultiMathOperator';
import CounterComp from './component/functionBasedAppr/counter/CounterComp';
import Product from './component/functionBasedAppr/Product/product';
import WelcomeComp from './component/WelcomeComp/WelcomeComp';
import PerformanceComp from './component/performaceComponent/PerformanceComp';
import IncDecCounter from './component/functionBasedAppr/IncDecCounter/IncDecCounter';

function App() {
  const [toggle,setToggle] = useState(false);
  const childRef = useRef();

  console.log(childRef.current)

  const onPressed = () => {
    console.log(childRef.current)
  }
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
    <div>++++++++++++++++++++++ forward ref ++++++++++++++++++++</div>
    <WelcomeComp ref={childRef}  text='hello'  />
    <div  onClick={onPressed}>Pressed It</div>
    <div> ++++app performance+++++++</div>
      <PerformanceComp />



    <div>inc/dec</div>
     <IncDecCounter />
    </div>

  );
}

export default App;
