import React from 'react'
import { useRecoilValue } from 'recoil'
import { randomUserList } from './store'

function RandomUserList() {
  const userList = useRecoilValue(randomUserList)

  return (
    <div>
      {userList.map((user) => (
        <div key={user.login?.uuid}>
          {user.name?.last}
          <img src={user.picture.large} alt="" />
        </div>
      ))}
    </div>
  )
}

export default RandomUserList
