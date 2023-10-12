import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increament,decreament, reset, incrementByAmount } from './counterSlice'
import { useState } from 'react'


const Counter = () => {
    const count = useSelector((state) => state.counters.count);
    const dispatch = useDispatch();
    const [increamentAmount, setIncrementAmount] = useState(0);
    const Amount = Number(increamentAmount) || 0;
    const resetAll = () =>{
      setIncrementAmount(0)
      dispatch(reset());
    }
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={()=>dispatch(increament())}>+</button>
            <button onClick={()=>dispatch(decreament())}>- </button>
        </div>
        <input type='number' value={increamentAmount} onChange={(e)=>setIncrementAmount(e.target.value)} />
        <div>
          <button onClick={()=>dispatch(incrementByAmount(Amount))}>add amount</button>
          <button onClick={()=>dispatch(resetAll)}>reset</button>
        </div>
    </section>

  )
}

export default Counter