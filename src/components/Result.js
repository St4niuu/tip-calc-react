import React from 'react'
import StyledResult from './styled/StyledResult.styled'

function Result(props) {
  return (
    <StyledResult>
        <div className='tip-amount'>
            <div className='left-bar'>
                <p>Tip Amount</p>
                <p>/ person</p>
            </div>
            <div className='right-bar'>
                ${props.result && props.result.tipAmount}{!props.result && '0.00'}
            </div>
        </div>
        <div className='total'>
            <div className='left-bar'>
                <p>Total</p>
                <p>/ person</p>
            </div>
            <div className='right-bar'>
                ${props.result && props.result.total}{!props.result && '0.00'}
            </div>
        </div>
        <button 
            style={{backgroundColor: props.result ? props.theme.colors.lightGrayishCyan : ''}}
            onClick={() => {
                props.setResult()
                props.dispatch({type: 'clear-state'})
                props.setSelectedTip(false)
                props.inputBill.current.value = null
                props.inputPeople.current.value = null
                props.customInput.current.value = null}}>
            Reset
        </button>
    </StyledResult>
  )
}

export default Result
