import React, {useState} from 'react'
import StyledOptions from './styled/StyledOptions.styled'

function Options(props) {

  const [isFilled, setIsFilled] = useState(true)

  const tipOptions = ['5%', '10%', '15%', '25%', '50%']

  function getResult(bill, tip, people) {
    if(bill && people) {
        let convertedTip = tip == '5%' ? `0.0${tip.substr(0, tip.length -1)}` : `0.${tip.substr(0, tip.length -1)}`
        let total = (bill/people) + ((bill/people) * convertedTip)
        let tipAmount = (bill/people) * convertedTip
        return props.setResult({total: total.toFixed(2), tipAmount: tipAmount.toFixed(2)})
    }
  }

  React.useEffect(() => {
    getResult(props.state.bill, props.state.tip, props.state.people)
  }, [props.state.tip])

  return (
    <StyledOptions>
        <div className='bill'>
            <p>Bill</p>
            <div className='bill-input'>
                <img src='./images/icon-dollar.svg' alt='dollar' />
                <input type='number' ref={props.inputBill} placeholder='0' min='0' onChange={e => {props.dispatch({type: 'set-bill', payload: {bill: e.target.value}})}}/>
            </div>
        </div>
        <div className='select-tip'>
            <p>Select Tip %</p>
            <div className='select-tip-options'>
                {tipOptions.map((value, index) => {
                    return <div key={index} style={{backgroundColor: props.selectedTip === index ? props.theme.colors.lightGrayishCyan : ''}} 
                    onClick={(e) => {
                        props.setSelectedTip(index)
                        props.dispatch({type: 'set-tip', payload: {tip: e.target.innerHTML}})
                        props.customInput.current.value = ''
                    }
                } 
                    className='select-tip-options-option'>{value}</div>
                })}
                <div className='select-tip-options-custom'>
                    <input type='number' ref={props.customInput} placeholder='Custom' min='0'
                    onChange={e => {props.dispatch({type: 'set-tip', payload: {tip: e.target.value}}) 
                    props.setSelectedTip()}} />
                </div>
            </div>
        </div>
        <div className='number-of-people'>
            <p>Number of People</p>
            <div className='number-of-people-input'>
                <img src='./images/icon-person.svg' alt='person' />
                <input type='number' ref={props.inputPeople} placeholder='0' min='0' onChange={e => {props.dispatch({type: 'set-number-of-people', payload: {people: e.target.value}})}}
                onBlur={e => {
                    if(!e.target.value) {
                        return setIsFilled(false)
                    }
                    return setIsFilled(true)
                }}
                style={{outline: isFilled === false ? 'red 2px solid': 'none'}}
                />
            </div>
        </div>
    </StyledOptions>
  )
}

export default Options
