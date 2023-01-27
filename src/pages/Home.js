import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      
      <div class="container">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="..." alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Third slide" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <p>
              Tired of running around in circles, feeling nothing gets done and everything feels like a fire that needs a fire(wo)man? This is a feeling a lot of people and organizations are struggling with this. 
            </p>  
            <p>GHOZT offers different services you can use:
              <ul>
                <li><Link to="/coaching">Coaching</Link></li>
                <li><Link to="/facilitation">Facilitation</Link></li>
                <li><Link to="/management">Management Training</Link></li>
              </ul>
            </p>
          </div>
          <div class="col-md">
            <div class="card">
            <h5 class="card-header">Customer reference</h5>
              <div class="card-body">
                <h5 class="card-title">[Customer Name]</h5>
                <p class="card-text">GHOZT helped [Customer Name] by training their C-Level management in..</p>
                <a href="/" class="btn btn-primary">Read more</a>
              </div>
              <div class="card-footer text-muted">
                2 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
