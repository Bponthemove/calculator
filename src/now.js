import React, { useState } from 'react'
import { Output } from './components/output';
import { Operator } from './components/operator';
import { Equals } from './components/equals';
import { Numbers } from './components/numbers';
import './App.css';

//todo - make secondInput go true and false
//make inputnumber the current input and as soon as an oprator is pressed that inputnumber is stored in calcArr, 
//followed by its chosen operator which is pushed to calcArr if a number or equals is pressed 

function App(props) {

  const [resultToggle, setResultToggle] = useState(false)
  const [operatorToggle, setOperatorToggle] = useState(false)
  const [numberToggle, setNumberToggle] = useState(false)
  const [operator, setOperator] = useState('')
  const [input, setInput] = useState('0')
  const [inputPrev, setInputPrev] = useState('')
  const [output, setOutput] = useState('')
  const [result, setResult] = useState(0)
  // state = 
  //   { resultToggle: false,
  //     operatorToggle: false,
  //     numberToggle: false,
  //     operator: '',
  //     input: '0',
  //     inputPrev: '', 
  //     output: '',
  //     result: 0 }

  //*******************************************//
  //______________AC btn handler_______________//
  //*******************************************//

  function clickHandleClear() {
    setResultToggle(false),
    setOperatorToggle(false),
    setNumberToggle(false),
    setOperator(''),
    setInput('0'),
    setInputPrev(''), 
    setOutput(''),
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
        setOperator(e.target.innerText),
        setOperatorToggle(true),
        setResult(input),
        setInputPrev(input),
        setResultToggle(false),
        setInput('') 
      } else {
        //already operator chosen 
          setOperator(e.target.innerText)
      }
      return
    } 
    else if (input === '0') {
      //operator chosen after equals
      setResultToggle(false),
      setOperatorToggle(true),
      setNumberToggle(false),
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
      setResult(result),
      setResultToggle(false),
      setInput(''),
      setOperator(e.target.innerText),
      setInputPrev(result)
    }
  }
    
  
  //*********************************************//
  //____________Number btn handler_______________//
  //*********************************************//

  function clickHandleNumbers(e) {
    if (!numberToggle) {
      console.log(1111111111);
      //numbertoggle is false means it is the first time a number is pressed 
      if (input !== '0') {
        console.log(input)
        //state is not '0' means we are updating to state
        setInput(prevState => console.log(prevState)),
        setNumberToggle(true),
        setOperatorToggle(false)
      } else {
        //if state is '0' means we are making new state
        this.setState(
          { input: e.target.innerText }
        )
      }
      return
    } else {
      console.log(222222222222)
      //numbertoggle is true so we are updating state
      this.setState( prevState => (
        { input: prevState.input + e.target.innerText }
      ) )
    }
  }

  //*************************************************//
  //____________Plus Minus btn handler_______________//
  //*************************************************//

  clickHandlePlusMinus = () => {
    if (this.state.input.split('')[0] === '-') {
      this.setState( prevState => (
        { input: prevState.input.slice(1) }
      ) )
    } else {
      this.setState( prevState => (
        { input: '-' + prevState.input }
      ) )
    }
  }
    
  
  //**********************************************//
  //____________Decimal btn handler_______________//
  //**********************************************//

  clickHandleDecimal = () => {
    //first no input yet so leave 0 and add decimal 
    if (this.state.input.slice(-1) !== "." && this.state.input.search(/\./) === -1) {
      this.setState( prevState => (
        {input: prevState.input + "."}
      ) )
    }
  }

  //*********************************************//
  //____________Equals btn handler_______________//
  //*********************************************//
  clickHandleEquals = () => {
    if (this.state.inputPrev === '') {
      this.setState( prevState => (
        { result: prevState.input,
          resultToggle: true,
          output: prevState.input }
      ) )
      return
    }
    if (this.state.inputPrev !== '' && this.state.input === '') {
      let result
      if (this.state.operator === '/') {
        result = 1
      }
      if (this.state.operator === '*') {
        result = parseFloat(this.state.inputPrev[0])**2
      }
      if (this.state.operator === '-') {
        result = 0
      }
      if (this.state.operator === '+') {
        result = parseFloat(this.state.inputPrev)*2
      }
      result = Math.round(parseFloat((result * Math.pow(10, 4)).toFixed(4))) / Math.pow(10, 4)
      this.setState(
        { result: result,
          resultToggle: true,
          operatorToggle: false,
          secondNumberToggle: false,
          output: `${this.state.inputPrev} ${this.state.operator[this.state.operator.length -1]} ${this.state.inputPrev} =`}
      )
      return
    } else {
        let result
        let operatorToUse = this.state.operator
        let inputToUse = this.state.input
        
        if (operatorToUse === '/') {
          result = parseFloat(this.state.inputPrev) / parseFloat(inputToUse)
        }
        if (operatorToUse === '*') {
          result = parseFloat(this.state.inputPrev) * parseFloat(inputToUse)
        }
        if (operatorToUse === '+') {
          result = parseFloat(this.state.inputPrev) + parseFloat(inputToUse)
        }
        if (operatorToUse === '-') {
          result = parseFloat(this.state.inputPrev) - parseFloat(inputToUse)
        }
          result = Math.round(parseFloat((result * Math.pow(10, 4)).toFixed(4))) / Math.pow(10, 4)
          this.setState(
            { result: result,
              resultToggle: true,
              operatorToggle: false,
              secondNumberToggle: false,
              output: `${this.state.inputPrev} ${this.state.operator[this.state.operator.length -1]} ${this.state.input} =`,
              inputPrev: result,
              input: '0'}
          )
    }
  }

  render() {
    return (
      <div className="main-container-outer">
        <h1>Calculator</h1>
        <div className="main-container-inner">
          <Output   input={this.state.input}
                    outputString={this.state.output} 
                    operator={this.state.operator[this.state.operator.length -1]}
                    result={this.state.result}
                    resultToggle={this.state.resultToggle}
                    operatorToggle={this.state.operatorToggle}
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
                          onClick={this.clickHandleOperator} 
                          operator={operator.symbol} 
                          id={operator.text}
                          clear={this.clickHandleClear}
                />
              )
            })}
            <Equals onClick={this.clickHandleEquals}/>
            <Numbers onClickNumbers={this.clickHandleNumbers} onClickDecimal={this.clickHandleDecimal} onClickPlusMinus={this.clickHandlePlusMinus}/>
          </div>
        </div>
        <footer>Bponthemove, Oct 2021</footer>
      </div>
    )
  }
}



export default App;