import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Popular = ({type,image, name, num, id}) => {
  const navigate = useNavigate()
  const [numvalue, setNumvalue] = useState("")

  //useeffect
  useEffect(() => {
    if(type == "article"){
      setNumvalue("view")
    }else{
      setNumvalue("follower");
    }
  },[])

  const todo= () => {
    console.log(type);
    if(type == "article"){
      navigate(`/show/${id}`)
    }else{
      navigate(`/writer/${id}`);
    }
  }
  return (
    <div className='Dark2 popular' onClick={todo}>
      <div className='outer'>
        <img src={image} alt="image" className='pop-image m-3' />
        <div>
          <p><b>{name}</b></p>
          <p>{num} {numvalue}</p>
        </div>
      </div>
    </div>
  )
}

export default Popular
