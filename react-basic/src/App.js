import React, {useCallback, useState} from 'react'
import Toggler from './components/Toggle';

function App(){
  // Components
  // HOOK REACT
  const [count, setCount] = useState(0);
  // Function
  const handleIncrease = useCallback(()=>{
    setCount(prev => prev+1)
  }, [])
  return(
    <React.Fragment>
      <h1>Press for increasing the number: {count}</h1>
      <Toggler onIncrease={handleIncrease}/>
    </React.Fragment>
  )
}
export default App;

