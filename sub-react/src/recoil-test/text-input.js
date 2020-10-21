import React from 'react'
import { useRecoilState } from 'recoil'
import { textState } from './store'

function TextInput() {
  const [text, setText] = useRecoilState(textState)

  function handleChange(evt) {
    setText(evt.target.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <br />
      Echo: {text}
    </div>
  )
}

export default TextInput
