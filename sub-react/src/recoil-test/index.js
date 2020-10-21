import React from 'react'
import { RecoilRoot } from 'recoil'
import NumberCounter from './number-counter'
import TextInput from './text-input'
import CharacterCounter from './character-counter'
import RandomUserList from './random-user-list'

function RecoilTest() {
  return (
    <RecoilRoot>
      <div>RecoilTest</div>
      <NumberCounter />
      <TextInput />
      <CharacterCounter />
      <React.Suspense fallback={<div>Loading...</div>}>
        <RandomUserList />
      </React.Suspense>
    </RecoilRoot>
  )
}

export default RecoilTest
