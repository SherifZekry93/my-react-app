import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Loader from './Loader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showLoading: true,
      number1: "",
      number2: "",
      operation: "!"
    }
  }
  componentDidMount() {
    this.loadApiData()
  }
  setOperation(op) {
    const display = `${this.state.number1} ${this.getAllOperationSigns()[op]} ${this.state.number2}`;
    this.setState({
      operation: op,
      display: display
    })
  }
  getOperationResult() {
    this.setState({
      showLoading: true,
    })
    const data = {
      "num1": this.state.number1, "num2": this.state.number2, "operation": this.state.operation
    }
    const headers = {
      'Content-Type': 'application/json',
    };
    axios.post('https://100insure.com/mi/api2.php', data, { headers: headers }).then(response => {
      return response.data
    })
      .then(data => {
        this.setResult(data);
      }
      ).catch(error => {
        this.setState({
          display:"error getting data",
          showLoading:false
        })
      });

  }
  setResult(data) {
    const display = `${this.state.number1} ${this.getAllOperationSigns()[this.state.operation]} ${this.state.number2} = ${Math.round((data + Number.EPSILON) * 100) / 100
      }`
    this.setState({
      showLoading: false,
      display: display
    })
  }
  getAllOperationSigns() {
    return {
      "minus": "-",
      "divided by": "/",
      "times": "*",
      "plus": "+"
    }
  }
  mapLettersIntoNumbers(data) {
    // console.log(data);
    var numbersToWords = {
      "one": 1,
      "two": 2,
      "three": 3,
      "four": 4,
      "five": 5,
      "six": 6,
      "seven": 7,
      "eight": 8,
      "nine": 9,
      "ten": 10,
      "eleven": 11,
      "twelve": 12,
      "thirteen": 13,
      "fourteen": 14,
      "fifteen": 15,
      "sixteen": 16,
      "seventeen": 17,
      "eighteen": 18,
      "nineteen": 19,
      "twenty": 20,
      "thirty": 30,
      "forty": 40,
      "fifty": 50,
      "sixty": 60,
      "seventy": 70,
      "eighty": 80,
      "ninety": 90,
      "hundred": 100
    };
    const valArray = Object.values(data);
    const resultInNumbers = {

    }
    valArray.map((nLetter, index) => {
      if (nLetter.includes('-')) {
        const letterArray = nLetter.split('-');
        resultInNumbers[index] = letterArray.map((l) => {
          return numbersToWords[l]
        }).reduce((acc, currentval) => {
          return acc + currentval;
        });
      }
      else {
        if (!resultInNumbers[index]) {
          resultInNumbers[index] = numbersToWords[nLetter]
        }
      }
      return true;
    })
    this.setState({
      number1: resultInNumbers[0],
      number2: resultInNumbers[1],
      display: `${resultInNumbers[0] + " ! " + resultInNumbers[1]}`,
      showLoading: false
    })
  }
  loadApiData = button => {
    this.setState({
      showLoading: true
    })
    axios.get('https://100insure.com/mi/api1.php').then(response => {
      return response.data
    })
      .then(data =>
        this.mapLettersIntoNumbers(data)
      ).catch(_ => {
        console.log("error ya 3m???")
        this.setState({
          display:"error getting data",
          showLoading:false
        })
      });
  };

  getData() {

  }
  render() {
    const { showLoading, display } = this.state;
    return (
      <div className="container">
        {showLoading && <Loader />}
        <div className="display">
          {display}
        </div>
        <div className="buttons">
          <button className="btn-operator" onClick={() => {
            this.setOperation('plus')}}>+</button>
          <button className="btn-operator" onClick={() => {
            this.setOperation('minus')
          }
          }>-</button>
          <button className="btn-operator" onClick={() => {
            this.setOperation('times')
          }
          }>X</button>
          <button className="btn-clear" onClick={() => {
            this.loadApiData();
          }
          }>C</button>
          <button className="btn-equals"
            onClick={() => {
              this.getOperationResult();
            }
            }
          >=</button>
          <button className="btn-operator" onClick={() => {
            this.setOperation('divided by')
          }
          }>/</button>
        </div>
      </div>
    )
  }
}

export default App;
