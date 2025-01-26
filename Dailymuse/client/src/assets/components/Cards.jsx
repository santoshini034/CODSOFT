import React from 'react'
import { useNavigate } from 'react-router-dom';

const Cards = ({image, date, type, heading, id}) => {

  const navigate = useNavigate();
  
  const showpage = (id) => {
    navigate(`/show/${id}`);
  }

  return (
    <div>
      <div class="card dark2 m-4 shadow">
        <img src={image} class="card-img-top Dark2" alt="..."/>
        <div class="card-body Dark2">
          <div className='text mb-2 Dark2'>
            <span classname ="Dark2">{date} </span>
            <span classname ="Dark2">{type}</span>
          </div>
          <h3 classname ="Dark2">{heading}</h3>
          <p className='bgred' onClick={() => showpage(id)}>Read more</p>
        </div> 
      </div>
    </div>
  )
}

export default Cards
