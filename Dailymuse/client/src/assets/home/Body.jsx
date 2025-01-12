import React from 'react'
import { useNavigate } from 'react-router-dom'

const Body = () => {
    const navigate  = useNavigate();

    const toshow = () => {
        navigate("/show");
    }
  return (
    <div>
        <h1 className='homeHeading'>All about today!</h1>
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 offset-lg-1">
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
  )
}

export default Body
