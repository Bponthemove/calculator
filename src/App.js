import React, { Component } from 'react'
import { Output } from './components/output';
import { Operator } from './components/operator';
import { Equals } from './components/equals';
import { Numbers } from './components/numbers';
import './App.css';

//todo - make secondInput go true and false
//make inputnumber the current input and as soon as an oprator is pressed that inputnumber is stored in calcArr, 
//followed by its chosen operator which is pushed to calcArr if a number or equals is pressed 

class App extends Component {
  constructor(props) {
    super(props)
    this.state=(
      { resultToggle: false,
        operatorToggle: false,
        minusToggle: false,
        numberToggle: false,
        operator: '',
        input: '0',
        inputPrev: '', 
        output: '',
        result: 0 }
    )
    this.clickHandleClear = this.clickHandleClear.bind(this)
    this.clickHandleBackspace = this.clickHandleBackspace.bind(this)
    this.clickHandleOperator = this.clickHandleOperator.bind(this)
    this.clickHandleEquals = this.clickHandleEquals.bind(this)
    this.clickHandleNumbers = this.clickHandleNumbers.bind(this)
    this.clickHandleDecimal = this.clickHandleDecimal.bind(this)
  }
  //______________AC btn handler_______________//
  clickHandleBackspace() {
    //backspace
    console.log(parseFloat("1000000"))
    console.log(parseFloat("1000000", 10))
    console.log(parseFloat("3.25"))
    console.log(parseFloat("3.25", 10))
    console.log(parseFloat("1000000"))
    console.log(parseFloat("1000000", 10))
    console.log(parseFloat("3.25"))
    console.log(parseFloat("3.25", 10))


//     1.35+1.35+1.35 => 4.050000000000001             .toFixed(9).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')
// (1.35+1.35+1.35).toFixed(2)     => 4.05
// (1.35+1.35+1.35).toFixed(3) => 4.05

//  or...
// (1.35+1.35+1.35).toFixed(4)     => 4.0500
// (1.35+1.35+1.35).toFixed(4) => 4.05
  }

  clickHandleClear = () => {
    this.setState(
      { resultToggle: false,
        operatorToggle: false,
        minusToggle: false,
        numberToggle: false,
        operator: '',
        input: '0',
        inputPrev: '', 
        output: '',
        result: 0 }
    )
  }

  //***********************************************//
  //____________Operator btn handler_______________//
  //***********************************************//

  clickHandleOperator(e) {
    if (this.state.inputPrev === '' || this.state.input === '') {
      console.log(11111111111111111);
      //no calculations, just updating state
      if (!this.state.operatorToggle) {
        //no operator yet chosen, just update operator state
        this.setState(
          { operator: [e.target.innerText],
            operatorToggle: true,
            result: this.state.input,
            inputPrev: this.state.input,
            resultToggle: false,
            input: '' }
        )
      } else {
        //already operator chosen 
        this.setState(
          { operator: [...this.state.operator ,e.target.innerText] }
        )
      }
      return
    } 
    if (this.state.input === '0') {
      console.log(24323523454534);
      //operator chosen after equals
      this.setState(
        { resultToggle: false,
          operatorToggle: true,
          numberToggle: false,
          operator: [e.target.innerText]}
      )
      return
    } else {
      console.log(33333333333333333);
      let result
      let operatorToUse = this.state.operator[0]
      let inputToUse = this.state.input
      if (this.state.operator.length > 1) {
        if (this.state.operator[this.state.operator.length -1] === '-') {
          operatorToUse = this.state.operator[this.state.operator.length -2]
          inputToUse = `-${this.state.input}`
        } else {
          operatorToUse = this.state.operator[this.state.operator.length -1]
          inputToUse = this.state.input
        }
      }
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
      //result toggle true so calculate result and use that as prev state
      this.setState(
        { result: result,
          resultToggle: false,
          input: '',
          operator: [e.target.innerText],
          inputPrev: result }
      )
    }
  }
    
  
  //*********************************************//
  //____________Number btn handler_______________//
  //*********************************************//

  clickHandleNumbers(e) {
    if (!this.state.numberToggle) {
      //numbertoggle is false means it is the first time a number is pressed 
      if (this.state.input !== '0') {
        //state is not '0' means we are updating to state
        this.setState(
          { input: this.state.input + e.target.innerText,
            numberToggle: true,
            operatorToggle: false }
        )
      } else {
        //if state is '0' means we are making new state
        this.setState(
          { input: e.target.innerText }
        )
      }
      return
    } else {
      //numbertoggle is true so we are updating state
      this.setState(
        { input: this.state.input + e.target.innerText }
      )
    }
  }

    
  

  //____________Decimal btn handler_______________//

  clickHandleDecimal() {
    //first no input yet so leave 0 and add decimal 
    if (this.state.input.slice(-1) !== "." && this.state.input.search(/\./) === -1) {
      this.setState(
        {input: this.state.input + "."}
      )
    }
  }
  //____________Equals btn handler_______________//
  clickHandleEquals() {
    if (this.state.inputPrev === '') {
      this.setState(
        { result: this.state.input,
          resultToggle: true,
          output: this.state.input }
      )
      return
    }
    if (this.state.inputPrev !== '' && this.state.input === '') {
      let result
      if (this.state.operator[this.state.operator.length -1] === '/') {
        result = 1
      }
      if (this.state.operator[this.state.operator.length -1] === '*') {
        result = parseFloat(this.state.inputPrev[0])**2
      }
      if (this.state.operator[this.state.operator.length -1] === '-') {
        result = 0
      }
      if (this.state.operator[this.state.operator.length -1] === '+') {
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
        let operatorToUse = this.state.operator[0]
        let inputToUse = this.state.input
        if (this.state.operator.length > 1) {
          if (this.state.operator[this.state.operator.length -1] === '-') {
            operatorToUse = this.state.operator[this.state.operator.length -2]
            inputToUse = `-${this.state.input}`
          } else {
            operatorToUse = this.state.operator[this.state.operator.length -1]
            inputToUse = this.state.input
          }
        }
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
              {text: "backspace", symbol: "C"}
            ].map(operator => {
              return (
                <Operator key={operator.text} 
                          onClick={this.clickHandleOperator} 
                          operator={operator.symbol} 
                          id={operator.text}
                          clear={this.clickHandleClear}
                          backspace={this.clickHandleBackspace}
                />
              )
            })}
            <Equals onClick={this.clickHandleEquals}/>
            <Numbers onClickNumbers={this.clickHandleNumbers} onClickDecimal={this.clickHandleDecimal}/>
          </div>
        </div>
        <footer>Bponthemove, Oct 2021</footer>
      </div>
    )
  }
}



export default App;
