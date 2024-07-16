import Input from './components/Input'
import Button from './components/Button'

import { Container, Content, Row } from './styles'
import { useState } from 'react'


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setfirstNumber] = useState('0');
  const [operation, setOperation] = useState('')

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0')
    setfirstNumber('0')
    setOperation('')
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setfirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSubNumbers = () => {
    if(firstNumber === '0'){
      setfirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === '0'){
      setfirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setfirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && currentNumber !== '0' && operation !== ''){
      switch(operation){
        case '+':
          handleSumNumbers()
          break
        case '-':
          handleSubNumbers()
          break
        case '*':
          handleMultNumbers()
          break
        case '/':
          handleDivNumbers()
          break
        default:
          break
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label = "C" onClick={handleOnClear} />
          <Button label = "%" onClick={() => handleAddNumber('')} />
          <Button label = "/" onClick={handleDivNumbers} />
          <Button label = "*" onClick={handleMultNumbers} />
        </Row>
        <Row>
          <Button label = "9" onClick={() => handleAddNumber('9')} />
          <Button label = "8" onClick={() => handleAddNumber('8')} />
          <Button label = "7" onClick={() => handleAddNumber('7')} />
          <Button label = "-" onClick={handleSubNumbers} />
        </Row>
        <Row>
          <Button label = "6" onClick={() => handleAddNumber('6')} />
          <Button label = "5" onClick={() => handleAddNumber('5')} />
          <Button label = "4" onClick={() => handleAddNumber('4')} />
          <Button label = "+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label = "3" onClick={() => handleAddNumber('3')} />
          <Button label = "2" onClick={() => handleAddNumber('2')} />
          <Button label = "1" onClick={() => handleAddNumber('1')} />
          <Button label = "=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;