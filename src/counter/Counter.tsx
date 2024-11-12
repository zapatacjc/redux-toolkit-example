import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from '../state/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by amount
        </button>
        <button onClick={() => dispatch(incrementAsync(15))}>
          Increment Async
        </button>
      </div>
    </div>
  );
};
export default Counter;
