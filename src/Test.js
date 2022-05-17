import React, { useState } from 'react'

function Test() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    
    return (
        <>
            <div>
                <p>firstName: {name.firstName}</p>
                <p>lastName: {name.lastName}</p>
                <input type='text' value={name.firstName} onChange={(e)=> setName({...name, firstName: e.target.value }) } />
                <input type='text' value={name.lastName} onChange={(e)=> setName({...name, lastName: e.target.value})} />
            </div>
        </>
    )
}

export default Test
