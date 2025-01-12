import React from 'react'
import { useNavigate } from 'react-router-dom'

const Post = () => {
    const navigate  = useNavigate();

    const toshow = () => {
        navigate("/show");
    }
  return (
    <div>
      <div className='allmainBody'>
        <h1 className='allHeading '>Liked Posts</h1>
        <div className="container">
            <div className="row">
            <div className='card Dark2' onClick={toshow}>
                        <img src="photos.avif" className='card-img-top Dark2' alt="..."/>
                        <hr />
                        <div className='card-body Dark2'>
                            <p className='card-text Dark2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className='card Dark2' onClick={toshow}>
                        <img src="photos.avif" className='card-img-top Dark2' alt="..."/>
                        <hr />
                        <div className='card-body Dark2'>
                            <p className='card-text Dark2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className='card Dark2' onClick={toshow}>
                        <img src="photos.avif" className='card-img-top Dark2' alt="..."/>
                        <hr />
                        <div className='card-body Dark2'>
                            <p className='card-text Dark2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className='card Dark2' onClick={toshow}>
                        <img src="photos.avif" className='card-img-top Dark2' alt="..."/>
                        <hr />
                        <div className='card-body Dark2'>
                            <p className='card-text Dark2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className='card Dark2' onClick={toshow}>
                        <img src="photos.avif" className='card-img-top Dark2' alt="..."/>
                        <hr />
                        <div className='card-body Dark2'>
                            <p className='card-text Dark2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className='card Dark2' onClick={toshow}>
                        <img src="photos.avif" className='card-img-top Dark2' alt="..."/>
                        <hr />
                        <div className='card-body Dark2'>
                            <p className='card-text Dark2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className='card Dark2' onClick={toshow}>
                        <img src="photos.avif" className='card-img-top Dark2' alt="..."/>
                        <hr />
                        <div className='card-body Dark2'>
                            <p className='card-text Dark2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className='card Dark2' onClick={toshow}>
                        <img src="photos.avif" className='card-img-top Dark2' alt="..."/>
                        <hr />
                        <div className='card-body Dark2'>
                            <p className='card-text Dark2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className='card Dark2' onClick={toshow}>
                        <img src="photos.avif" className='card-img-top Dark2' alt="..."/>
                        <hr />
                        <div className='card-body Dark2'>
                            <p className='card-text Dark2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Post
