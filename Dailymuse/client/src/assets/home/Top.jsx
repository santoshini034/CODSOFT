import React from 'react'

const Top = () => {
  return (
    <div className='top Dark1'>
      <form action="/" method="post">
        <input className='search Dark2' type="text" placeholder='Search Your Intrest' />
        <button className='searchButton Dark2'><i class="fa-solid fa-magnifying-glass Dark2"></i></button>
      </form>
    </div>
  )
}

export default Top
