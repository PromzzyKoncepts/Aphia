import React from 'react'
import { Link } from 'react-router-dom'
import "../stylesheets/NotFound.css";

function NotFound() {
  return (
    <div>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class=" text-center">
                <div class="four_zero_four_bg ">
                  <h1 class="text-center text-6xl ">Page Not Found</h1>


                </div>

                <div class="contant_box_404">
                  <h3 class=" text-4xl">
                    Oops! Looks like you're lost
                  </h3>

                  <p>The page you are looking for is not available!</p>

                  <Link to="/" class="link_404 no-underline p-3 text-slate-50 bg-amber-500 rounded hover:bg-orange-500 m-5">Go to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound