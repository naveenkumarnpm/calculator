import React from 'react'
import styles from './App.module.css'
import Display from './components/display'
import ButtonsContainer from './components/ButtonContainer'
import { useState } from 'react'


function App() {

  const [calVal,setCalVal]=useState("");
  const onButtonClicked = (buttonText)=>{
    if(buttonText=='c')
    {
      setCalVal("");
    }else if(buttonText=='=')
    {
      const result=eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayValue=calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };


  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClicked={onButtonClicked}></ButtonsContainer>
    </div>
  )
}

export default App
