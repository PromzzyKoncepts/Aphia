import React from 'react'
import { Link } from 'react-router-dom'
import "../stylesheets/NotFound.css";
import unfound from "../assets/404.jpg"

function NotFound() {
  return (
    <div>
      <section className="grid grid-cols-2 place-items-center mt-9">
        <div className="col-span-1 item1">
          <h1 className=' text-9xl text-orange-500 font-bold pb-6'>Oops!</h1>
          <h4>We can't seem to find the page you are looking for.</h4>
          <small>Error code: 404</small>
          <p>Here are some helpful links instead</p>
          <div className='flex flex-col'>
          <Link className='font-bold no-underline' to="/">Home</Link>
            <Link className='no-underline' to="/latest">Latest Arrivals</Link>
            <Link className='no-underline' to="/cart">Cart</Link>
            <Link className='no-underline' to="/dashboard">Sell on Aphia</Link>
            <Link className='no-underline' to="/about">About Aphia</Link>

          </div>
          
        </div>
        <div className="item2 col-span-1">
          <img className=' h-full  object-cover' src={unfound} alt='404 not found' />
        </div>
      </section>
    </div>
  )
}

export default NotFound