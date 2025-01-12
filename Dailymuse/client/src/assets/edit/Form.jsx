import React from 'react'

const Form = () => {
  return (
    <div>
      <div>
      <div className="container mt-3">
        <div className="row">
            <div className="col-10 offset-1 editForm">
                <h2 className='m-3 editHeading'>Edit your Blog</h2>
                <form action="#" className='Eform'>
                    <div className="col-10 offset-1">
                        <div className='pb-3 EformInputdata'>
                            <label htmlFor="image">Image: </label>
                            <input type="text" name="image" id="image" placeholder='Enter image url' />
                        </div>
                        <div className='pb-3 EformInputdata'>
                            <label htmlFor="type">Type: </label>
                            <input type="text" name="type" id="type" placeholder='Enter type of blog' />
                        </div>
                        <div className='pb-3 EformInputdata'>
                            <label htmlFor="heading">Heading: </label>
                            <input type="text" name="heading" id="heading" placeholder='heading' />
                        </div>
                        <div className='pb-3 EformInputdata'>
                            <label htmlFor="blog">Enter blog: </label>
                            <textarea name="blog" id="blog" rows={5}>Enter you thoughts</textarea>
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
