import {useState} from 'react'

function useCounter () {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount (count => count + 1)
  }

  return {
    count : count,
    increaseCount: increaseCount
  }
}

function App() {
   const {count, increaseCount} = useCounter();

  return (
    <>
      <div>Count is: {count}</div>
      <button onClick={increaseCount}>Increase</button>
    </>
  );
}

export default App;