import { useReducer } from 'react'
function App() {

  const initialState = { count: 0 }
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }

      case 'decrement':
        return { count: state.count - 1 }

        case "reset":
          return {count: 0}
        default:
          return state
    }
  }

const [state, dispatch] = useReducer(reducer, initialState )
  return <>
  <h1>{state.count}</h1>
  <button onClick={()=> dispatch({type:'increment' })}>+</button>
  <button onClick={()=> dispatch({type: 'decrement'}) }>-</button>
  <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
  
  </>
}
export default App