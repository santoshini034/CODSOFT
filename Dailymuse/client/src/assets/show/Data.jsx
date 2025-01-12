import React from 'react'
import { Link } from 'react-router-dom'

const Data = () => {
  return (
      <div className="container mt-3">
        <div className="row">
            <div className="col-10 offset-1 showdata Dark2">
                <h2 className='m-3 dataHeading Dark2'>Data heading</h2>
                <img src="photos.avif" alt="" />
                <br />
                <br />
                <div className="datadetails">
                    <span className='Dark2'><b className='Dark2' >Post by @sam</b></span>
                    <span className='Dark2'><b className='Dark2'>3/12/2024</b></span>
                    <span className='Dark2'><i class="fa-regular fa-heart Dark2"></i></span>
                    <span className='Dark2'><i class="fa-solid fa-clock Dark2"></i>Watch 1</span>
                </div>
                <p className='col-10 offset-1 Dark2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime assumenda nulla quas, voluptatibus maiores eaque optio animi, totam laborum obcaecati dolor. Ipsum expedita quae illo dolores velit ut inventore.
                    Et consequatur laboriosam architecto doloremque inventore recusandae eveniet distinctio repellendus dolor soluta, tempore tempora, rem cumque fugiat maiores, fuga nihil itaque in! Quas, sequi accusantium? Iusto quasi earum quis facilis!
                    Voluptates fuga, harum doloribus tempora nihil, cumque iusto ducimus quae, officiis fugit deleniti illo delectus molestiae qui perferendis ex atque eveniet dicta minima! Voluptatibus vitae repellendus accusamus rem, et tenetur.
                    Quibusdam repellat illo molestias esse eveniet nobis reiciendis repudiandae alias, doloribus, sint voluptas amet distinctio nihil officiis mollitia nesciunt dolores quod facilis natus soluta, dolorem ad fuga! Ex, velit amet?
                    Quo, numquam! Labore blanditiis odit impedit beatae nemo velit laborum totam tempora doloribus deleniti repudiandae voluptates esse provident, a nam aliquid cupiditate cum odio itaque. Provident sapiente ut illo delectus!
                    Ea culpa cumque nihil nisi maiores dolorum et vitae at dicta. Repellendus, debitis pariatur. Id in aliquid sunt animi ducimus ipsam officia. Quasi laboriosam non inventore harum doloribus, est facere.
                    Pariatur veniam dignissimos odit eaque nostrum quasi culpa in, omnis nemo enim et laudantium quaerat inventore aspernatur voluptatem aliquid voluptates dolorum explicabo beatae quo voluptate. Magni repellat possimus provident perferendis!
                    Fuga ut suscipit exercitationem veniam reiciendis eum natus provident id iste, itaque obcaecati accusamus, illo sint. Nisi est dolorem repellendus similique dolore maxime iusto. Reiciendis, eveniet. Iure eligendi ratione dignissimos.
                    A optio dolor officia sint illo cum totam perferendis explicabo omnis similique nesciunt, sit assumenda reprehenderit soluta fuga obcaecati id eveniet voluptatum repellat pariatur possimus? Architecto amet doloremque ullam corporis.
                    Dicta at consectetur repudiandae voluptatem nemo! Aliquid veritatis, nam nesciunt tenetur vel saepe exercitationem architecto possimus eligendi, dignissimos porro. Accusamus ratione illo esse cumque voluptas quas nam aliquid placeat temporibus!
                </p>
                <div className="databtn Dark2">
                    <Link to='/edit' className='btn btn-success' >Edit</Link>
                    <button className='btn btn-danger'>Delete</button>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Data
