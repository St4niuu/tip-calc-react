import React, {useReducer, useState} from 'react'
import StyledContainer from './styled/StyledContainer.styled'
import Options from './Options'
import Result from './Result'

function reducer(state, action) {
  switch(action.type) {
    case 'set-bill':
    {
      return {...state, bill: action.payload.bill}
    }
    case 'set-tip':
    {
      return {...state, tip: action.payload.tip}
    }
    case 'set-number-of-people':
    {
      return {...state, people: action.payload.people}
    }
    case 'clear-state':
    {
      return {}
    }
    default:
    {
      return {}
    }
  }
}

function Container(props) {

  const [state, dispatch] = useReducer(reducer, {})
  const [result, setResult] = useState(() => {return})
  const [selectedTip, setSelectedTip] = useState()

  const inputBill = React.useRef()
  const customInput = React.useRef()
  const inputPeople = React.useRef()

  return (
    <StyledContainer>
      <Options dispatch={dispatch} theme={props.theme} state={state} setResult={setResult} selectedTip={selectedTip} setSelectedTip={setSelectedTip} inputBill={inputBill} inputPeople={inputPeople} customInput={customInput}/>
      <Result theme={props.theme} result={result} setResult={setResult} dispatch={dispatch} setSelectedTip={setSelectedTip} inputBill={inputBill} inputPeople={inputPeople} customInput={customInput}/>
    </StyledContainer>
  )
}

export default  Container