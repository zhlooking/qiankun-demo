import React from 'react'
import { useRecoilValue } from 'recoil'
import { charCountState } from './store'

function CharCounter() {
  const count = useRecoilValue(charCountState)

  return <div>char length: {count}</div>
}

export default CharCounter
