import React, { useState } from 'react'
import { Output } from './components/output';
import { Operator } from './components/operator';
import { Equals } from './components/equals';
import { Numbers } from './components/numbers';
import Logic from './hooks/logic';
import './App.css';


function App() {

  const { input,
          output,
          operator,
          result,
          resultToggle,
          operatorToggle,
          clickHandleClear,
          clickHandleDecimal,
          clickHandleEquals,
          clickHandleNumbers,
          clickHandleOperator,
          clickHandlePlusMinus 
  } = Logic()

  return (
    <div className="main-container-outer">
      <h1>Calculator</h1>
      <div className="main-container-inner">
        <Output   input={input}
                  outputString={output} 
                  operator={operator}
                  result={result}
                  resultToggle={resultToggle}
                  operatorToggle={operatorToggle}
        />
        <div className="btn-container">
          {[
            {text: "divide", symbol: "/"}, 
            {text: "multiply", symbol: "*"}, 
            {text: "subtract", symbol: "-"}, 
            {text: "add", symbol: "+"},
            {text: "clear", symbol: "AC"},
          ].map(operator => {
            return (
              <Operator key={operator.text} 
                        onClick={clickHandleOperator} 
                        operator={operator.symbol} 
                        id={operator.text}
                        clear={clickHandleClear}
              />
            )
          })}
          <Equals onClick={clickHandleEquals}/>
          <Numbers  onClickNumbers={clickHandleNumbers} 
                    onClickDecimal={clickHandleDecimal} 
                    onClickPlusMinus={clickHandlePlusMinus}
          />
        </div>
      </div>
      <footer>Bponthemove, Oct 2021</footer>
    </div>
  )
}



export default App;