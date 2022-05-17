import React, {useReducer} from 'react'

const initialValue = 0

const reducer = (state, action) => {
    switch (action) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        default:
            return state    
    }
}

export default function Counter() {
    const [count, dispatch] = useReducer( reducer, initialValue)
    return (
        <div>
            {count}
            <button onClick={()=> dispatch('INC')}>Inc</button>
            <button onClick={()=> dispatch('DEC')}>Dec</button>
        </div>
    )
}
