import React, { useState } from 'react'

export default function Sample() {
    const [todo, setTodo] = useState('')
    const [list, setlist] = useState([])

    const inputHandler = (r) => {
        setTodo(r.target.value)
    }

    const buttonHandler = () => {
        setlist(list.concat(todo))
    }

  return (
    <div>
        <input 
            placeholder='new ...'
            value={todo}
            onChange={inputHandler}
        />
        <button
            onClick={buttonHandler}
        >add</button>
        <ul>
            {list.map( item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}
