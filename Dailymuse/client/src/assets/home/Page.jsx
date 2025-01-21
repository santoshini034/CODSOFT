import React from 'react'
import Top from './Top'
import Body from './Body'

const Page = (token) => {
  console.log(token)
  return (
    <div>
      <Top/>
      <Body token = {token}/>
    </div>
  )
}

export default Page
