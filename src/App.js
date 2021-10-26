import React, { useState } from 'react'
import { Output } from './components/output';
import { Operator } from './components/operator';
import { Equals } from './components/equals';
import { Numbers } from './components/numbers';
import './App.css';


function App() {

  const [resultToggle, setResultToggle] = useState(false)
  const [operatorToggle, setOperatorToggle] = useState(false)
  const [numberToggle, setNumberToggle] = useState(false)
  const [operator, setOperator] = useState('')
  const [input, setInput] = useState('0')
  const [inputPrev, setInputPrev] = useState('')
  const [output, setOutput] = useState('')
  const [result, setResult] = useState(0)
  
  //*******************************************//
  //______________AC btn handler_______________//
  //*******************************************//

  function clickHandleClear() {
    setResultToggle(false)
    setOperatorToggle(false)
    setNumberToggle(false)
    setOperator('')
    setInput('0')
    setInputPrev('')
    setOutput('')
    setResult(0) 
  }

  //***********************************************//
  //____________Operator btn handler_______________//
  //***********************************************//

  function clickHandleOperator(e) {
    if (inputPrev === '' || input === '') {
      //no calculations, just updating state
      if (!operatorToggle) {
        //no operator yet chosen, just update operator state
        setOperator(e.target.innerText)
        setOperatorToggle(true)
        setResult(input)
        setInputPrev(input)
        setResultToggle(false)
        setInput('') 
      } else {
        //already operator chosen 
          setOperator(e.target.innerText)
      }
      return
    } 
    else if (input === '0') {
      //operator chosen after equals
      setResultToggle(false)
      setOperatorToggle(true)
      setNumberToggle(false)
      setOperator(e.target.innerText)
      return
    } else {
      let result

      if (operator === '/') {
        result = parseFloat(inputPrev) / parseFloat(input)
      }
      if (operator === '*') {
        result = parseFloat(inputPrev) * parseFloat(input)
      }
      if (operator === '+') {
        result = parseFloat(inputPrev) + parseFloat(input)
      }
      if (operator === '-') {
        result = parseFloat(inputPrev) - parseFloat(input)
      }
      result = Math.round(parseFloat((result * Math.pow(10, 4)).toFixed(4))) / Math.pow(10, 4)
      //result toggle true so calculate result and use that as prev state
      setResult(result)
      setResultToggle(false)
      setInput('')
      setOperator(e.target.innerText)
      setInputPrev(result)
    }
  }
    
  
  //*********************************************//
  //____________Number btn handler_______________//
  //*********************************************//

  function clickHandleNumbers(e) {
    if (!numberToggle) {
      //numbertoggle is false means it is the first time a number is pressed 
      if (input !== '0') {
        //state is not '0' means we are updating to state
        setInput(prevState => prevState + e.target.innerText)
        setNumberToggle(true)
        setOperatorToggle(false)
      } else {
        //if state is '0' means we are making new state
          setInput(e.target.innerText) 
      }
      return
    } else {
      //numbertoggle is true so we are updating state
        setInput(prevState => prevState + e.target.innerText)
    }
  }

  //*************************************************//
  //____________Plus Minus btn handler_______________//
  //*************************************************//

  function clickHandlePlusMinus() {
    if (input.split('')[0] === '-') {
      setInput(prevState => prevState.slice(1))
    } else {
        setInput(prevState => '-' + prevState)
    }
  }
    
  
  //**********************************************//
  //____________Decimal btn handler_______________//
  //**********************************************//

  function clickHandleDecimal() {
    //first no input yet so leave 0 and add decimal 
    if (input.slice(-1) !== "." && input.search(/\./) === -1) {
      setInput(prevState => prevState + ".")
    }
  }

  //*********************************************//
  //____________Equals btn handler_______________//
  //*********************************************//
  function clickHandleEquals() {
    if (inputPrev === '') {
      //if equals is clicked directly after the first number input, without operator
      setResult(input)
      setResultToggle(true)
      setOutput(input)
      return
    }
    else if (inputPrev !== '' && input === '') {
      //if equals is clicked after the operator, without a second number input
      let result
      if (operator === '/') {
        result = 1
      }
      if (operator === '*') {
        result = parseFloat(inputPrev)**2
      }
      if (operator === '-') {
        result = 0
      }
      if (operator === '+') {
        result = parseFloat(inputPrev)*2
      }
      result = Math.round(parseFloat((result * Math.pow(10, 4)).toFixed(4))) / Math.pow(10, 4)
      setResult(result)
      setResultToggle(true)
      setOperatorToggle(false)
      setOutput(`${inputPrev} ${operator} ${inputPrev} =`)
      return
    } else {
        let result
        
        if (operator === '/') {
          result = parseFloat(inputPrev) / parseFloat(input)
        }
        if (operator === '*') {
          result = parseFloat(inputPrev) * parseFloat(input)
        }
        if (operator === '+') {
          result = parseFloat(inputPrev) + parseFloat(input)
        }
        if (operator === '-') {
          result = parseFloat(inputPrev) - parseFloat(input)
        }
        result = Math.round(parseFloat((result * Math.pow(10, 4)).toFixed(4))) / Math.pow(10, 4)
        setResult(result)
        setResultToggle(true)
        setOperatorToggle(false)
        setOutput(`${inputPrev} ${operator} ${input} =`)
        setInputPrev(result)
        setInput('0')
    }
  }

  
  return (
    <div className="main-container-outer">
      <h1>Calculator</h1>
      <div className="main-container-inner">
        <Output   input={input}
                  outputString={output} 
                  operator={operator[operator.length -1]}
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