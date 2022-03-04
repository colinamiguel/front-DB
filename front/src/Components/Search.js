import React, { useState } from 'react'

export default function Search() {

    const [name, setName] = useState('');

  return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <button>Search</button>
    </div>
  )
}
