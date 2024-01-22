import React from 'react'
import styles from './App.module.css'
import Display from './components/display'
import ButtonsContainer from './components/ButtonContainer'


function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  )
}

export default App
