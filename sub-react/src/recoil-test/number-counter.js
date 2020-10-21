import React from 'react'

function Counter() {
  function handleInc() {}

  function handleDec() {}

  return (
    <div>
      <button onClick={handleInc}>+</button>

      <button onClick={handleDec}>-</button>
    </div>
  )
}

export default Counter
