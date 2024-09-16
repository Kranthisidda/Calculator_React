import './Keypad.css'
function Keypad({handleInput, output,clear,omitLast}){
    return (
        <div className = "Keypad">
            <div className = "rows">
                <button className='digit' onClick={()=>handleInput('7')}>7</button>
                <button className='digit'onClick={()=>handleInput('8')}>8</button>
                <button className='digit'onClick={()=>handleInput('9')}>9</button>
                <button className='op'onClick={()=>handleInput('/')}>/</button>            

            </div>
            <div className = "rows">
                <button className='digit'onClick={()=>handleInput('4')}>4</button>
                <button className='digit'onClick={()=>handleInput('5')}>5</button>
                <button className='digit'onClick={()=>handleInput('6')}>6</button>
                <button className='op'onClick={()=>handleInput('*')}>*</button>            

            </div>
            <div className = "rows">
                <button className='digit'onClick={()=>handleInput('1')}>1</button>
                <button className='digit'onClick={()=>handleInput('2')}>2</button>
                <button className='digit'onClick={()=>handleInput('3')}>3</button>
                <button className='op'onClick={()=>handleInput('-')}>-</button>            

            </div>
            <div className = "rows">
                <button className='digit'onClick={()=>handleInput('0')}>0</button>
                
                <button className='digit' onClick={()=>clear()}>C</button>
                <button className='digit'onClick={()=>omitLast()}>D</button>
                <button className='op'onClick={()=>handleInput('+')}>+</button>            

            </div>
            <div>
            <button className='digitlast'onClick={()=>output()}>=</button>
            </div>
        </div>
    )
}
export default Keypad;