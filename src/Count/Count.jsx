import {React, useState} from 'react'
import './Count.css'

const Count = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }
    


  return (
    <div className='div_count_container'>
        <div className='div_count_content'>
            <div className='div_span'>
              <span id='span_text1'>Count: </span>
              <span id='span_text2'>{count}</span>
            </div>
            <div className='div_buttons'>
                <button id='button_increment' onClick={handleIncrement}>Increment</button>
                <button id='button_decrement' onClick={handleDecrement}>Decrement</button>
                <button id='button_reset' onClick={() => setCount(0)}>Reset</button>
            </div>    
        </div>
    </div>
  )
}

export default Count;