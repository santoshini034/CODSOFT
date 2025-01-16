import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [image,setImage] = useState();
  const [dtype,setType] = useState();
  const [heading,setHeading] = useState();
  const [information,setInformation] = useState();

  const navigate = useNavigate();

  const addData = (e) => {
    e.preventDefault();
    if(image == "" || dtype == "" || heading == "" || information == "" ){
      alert("Please! Enter valid credentials");
  }else{
      axios.post('http://localhost:8080/adddata', { dat : {image, dtype, heading,information}}).then((res) => {
        if(res.data == "success"){
          navigate("/");
        }
      })
  }
  } 
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
            <div className="col-10 offset-1 createForm Dark2">
                <h2 className='m-3 createHeading Dark2'>Create your Blog</h2>
                <form onSubmit={addData} className='Cform Dark2'>
                    <div className="col-10 offset-1">
                        <div className='pb-3 CformInputdata Dark2'>
                            <label htmlFor="image" className='Dark2'>Image: </label>
                            <input type="text" name="image" id="image" placeholder='Enter image url' autoComplete='off' value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>
                        <div className='pb-3 CformInputdata Dark2'>
                            <label htmlFor="dtype" className='Dark2'>Type: </label>
                            <input type="text" name="dtype" id="dtype" placeholder='Enter type of blog' autoComplete='off' value={dtype} onChange={(e) => setType(e.target.value)} />
                        </div>
                        <div className='pb-3 CformInputdata Dark2'>
                            <label htmlFor="heading" className='Dark2'>Heading: </label>
                            <input type="text" name="heading" id="heading" placeholder='heading' autoComplete='off' value={heading} onChange={(e) => setHeading(e.target.value)} />
                        </div>
                        <div className='pb-3 CformInputdata Dark2'>
                            <label htmlFor="information" className='Dark2'>Enter blog: </label>
                            <textarea name="information" id="information" rows={5} autoComplete='off' value={information} onChange={(e) => setInformation(e.target.value)} ></textarea>
                        </div>
                        <div className='pb-3 CformInputdataDark2'>
                        <button className='button Dark1'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Form
