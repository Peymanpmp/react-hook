import React, {useContext} from 'react'
import { Counter } from './App'

export default function C() {
  const item = useContext(Counter)
  return (
    <div>
        <button onClick={()=> item.dispatch('INC')}>Inc</button>
        <button onClick={()=> item.dispatch('DEC')}>Dec</button>
        {item.cunter}
    </div>
  )
}
