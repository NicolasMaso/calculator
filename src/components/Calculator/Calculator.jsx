import React from 'react'
import { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '../Button/Button'
import { FaApple } from "react-icons/fa";

export default function Calculator() {

  const [number, setNumber] = useState(0);
  const [memory, setMemory] = useState(0);
  const [operator, setOperator] = useState("");

  function handleNumberClick (content) {
    if(content !== '.') {
      setNumber(number === 0 ? content : number + content);
    } else {
      if (!(String(number).includes("."))) {
        setNumber(number > 0 ? number + content : number);
      }
    }
  };

  function clearDisplay() {
    setNumber(0);
    setMemory(0);
    setOperator("");
  };

  function handleSignal() {
    setNumber(parseFloat(number) > 0 ? parseFloat(-number) : Math.abs(parseFloat(number)));
  }

  function handlePercentage() {
    setNumber(parseFloat(number) / 100);
  }

  function handleResult() {

    switch(operator) {
      case "÷":
        setNumber(parseFloat(memory) / parseFloat(number));
        break;
      case "-":
        setNumber(parseFloat(memory) - parseFloat(number));
        break;
      case "+":
        setNumber(parseFloat(memory) + parseFloat(number));
        break;
      case "X":
        setNumber((parseFloat(parseFloat(memory) * parseFloat(number)).toFixed(2)));
        break;
      default:
        break;
    }

  }

  function handleOperator(content){
    setOperator(content);
    setMemory(parseFloat(number));
    setNumber(0);
  }

  return (
      <>
      <Box m={10}/>
    <Container maxWidth="xs">
    
      <div className="title"> <FaApple/> iPhone Calculator</div>
    <div className='wrapper'>
        <Box m={12}/>
        <div className="display">{number}</div>
        <Button onClick={clearDisplay} content="AC" type="top-operator"/>
        <Button onClick={handleSignal} content="+/-" type="top-operator"/>
        <Button onClick={handlePercentage} content="%" type="top-operator"/>
        <Button onClick={handleOperator} content="÷"  type="side-operator"/>
        <Button onClick={handleNumberClick} content="7" />
        <Button onClick={handleNumberClick} content="8"/>
        <Button onClick={handleNumberClick} content="9"/>
        <Button onClick={handleOperator} content="X" type="side-operator"/>
        <Button onClick={handleNumberClick} content="4"/>
        <Button onClick={handleNumberClick} content="5"/>
        <Button onClick={handleNumberClick} content="6"/>
        <Button onClick={handleOperator} content="-" type="side-operator"/>
        <Button onClick={handleNumberClick} content="1"/>
        <Button onClick={handleNumberClick} content="2"/>
        <Button onClick={handleNumberClick} content="3"/>
        <Button onClick={handleOperator} content="+" type="side-operator"/>
        <Button onClick={handleNumberClick} content="0"/>
        <Button onClick={handleNumberClick} content="."/>
        <Button onClick={handleResult} content="=" type="side-operator"/>
    </div>
    </Container>
      </>
  )
}
