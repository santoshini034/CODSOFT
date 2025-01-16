import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Form = () => {
  const navigate  = useNavigate()
  const location = useLocation(); 
  const id = location.state;

  const [image,setImage] = useState();
  const [dtype,setType] = useState();
  const [heading,setHeading] = useState();
  const [information,setInformation] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8080/editpage/${id}`).then((res) => {
      console.log(res.data);
      setImage(res.data.image);
      setType(res.data.dtype);
      setHeading(res.data.heading);
      setInformation(res.data.information);
    })
  }, [])

  const editdata = (e) => {
    e.preventDefault();
    if(image == "" || dtype == "" || heading == "" || information == "" ){
      alert("Please! Enter valid credentials");
  }else{
      axios.post(`http://localhost:8080/editdata/${id}`, { dat : {image, dtype, heading,information}}).then((res) => {
        if(res.data == "success"){
          navigate("/show", {state: id});
        }
      })
  }
  }
  
  return (
    <div>
      <div>
      <div className="container mt-3">
        <div className="row">
            <div className="col-10 offset-1 editForm">
                <h2 className='m-3 editHeading'>Edit your blog</h2>
                <form onSubmit={editdata} className='Eform'>
                    <div className="col-10 offset-1">
                        <div className='pb-3 EformInputdata'>
                            <label htmlFor="image">Image: </label>
                            <input type="text" name="image" id="image" placeholder='Enter image url' autoComplete='off' value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>
                        <div className='pb-3 EformInputdata'>
                            <label htmlFor="dtype">Type: </label>
                            <input type="text" name="dtype" id="dtype" placeholder='Enter type of blog' autoComplete='off' value={dtype} onChange={(e) => setType(e.target.value)} />
                        </div>
                        <div className='pb-3 EformInputdata'>
                            <label htmlFor="heading">Heading: </label>
                            <input type="text" name="heading" id="heading" placeholder='heading' autoComplete='off' value={heading} onChange={(e) => setHeading(e.target.value)} />
                        </div>
                        <div className='pb-3 EformInputdata'>
                            <label htmlFor="blog">Enter blog: </label>
                            <textarea name="blog" id="blog" rows={5} autoComplete='off' value={information} onChange={(e) => setInformation(e.target.value)} >Enter you thoughts</textarea>
                        </div>
                        <div className='pb-3 EformInputdata'>
                        <button className='btn btn-success'>Edit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Form
