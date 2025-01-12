import React from 'react'

const Form = () => {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
            <div className="col-10 offset-1 createForm Dark2">
                <h2 className='m-3 createHeading Dark2'>Create your Blog</h2>
                <form action="#" className='Cform Dark2'>
                    <div className="col-10 offset-1">
                        <div className='pb-3 CformInputdata Dark2'>
                            <label htmlFor="image" className='Dark2'>Image: </label>
                            <input type="text" name="image" id="image" placeholder='Enter image url' />
                        </div>
                        <div className='pb-3 CformInputdata Dark2'>
                            <label htmlFor="type" className='Dark2'>Type: </label>
                            <input type="text" name="type" id="type" placeholder='Enter type of blog' />
                        </div>
                        <div className='pb-3 CformInputdata Dark2'>
                            <label htmlFor="heading" className='Dark2'>Heading: </label>
                            <input type="text" name="heading" id="heading" placeholder='heading' />
                        </div>
                        <div className='pb-3 CformInputdata Dark2'>
                            <label htmlFor="blog" className='Dark2'>Enter blog: </label>
                            <textarea name="blog" id="blog" rows={5}>Enter you thoughts</textarea>
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
