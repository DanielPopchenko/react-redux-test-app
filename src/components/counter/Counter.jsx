import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount } from '../../store/counter/counter.slice';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [incrementAmount, setIncrementAmount] = useState(1);
  const [decrementAmount, setDecrementAmount] = useState(1);

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>

      <hr />

      <div>
        <input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <input value={decrementAmount} onChange={(e) => setDecrementAmount(e.target.value)} />

        <button aria-label="Increment value" onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>
          Increment by {incrementAmount}
        </button>

        <button aria-label="Decrement value" onClick={() => dispatch(decrementByAmount(Number(decrementAmount)))}>
          Decrement by {decrementAmount}
        </button>
      </div>
    </div>
  );
}

// function Counter() {
//   const [incrementAmount, setIncrementAmount] = useState('2');

//   return (
//     <div>
//       <div className={styles.row}>
//         <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment())}>
//           +
//         </button>
//         <span className={styles.value}>{count}</span>
//         <button className={styles.button} aria-label="Decrement value" onClick={() => dispatch(decrement())}>
//           -
//         </button>
//       </div>
//       <div className={styles.row}>
//         <input
//           className={styles.textbox}
//           aria-label="Set increment amount"
//           value={incrementAmount}
//           onChange={(e) => setIncrementAmount(e.target.value)}
//         />
//         <button className={styles.button} onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
//           Add Amount
//         </button>
//         <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
//           Add Async
//         </button>
//       </div>
//     </div>
//   );
// }
