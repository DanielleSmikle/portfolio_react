import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className= 'portfolio__item'>
          <div className = "portfolio__item-image">
            <img src={IMG1} alt="ToDo App"/>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href=" https://github.com" className='btn' target='_blank' >Github</a>
          {/* <a href=" https://deploy.com" className='btn btn-primary' target='_blank'>Live Demo</a> */}
        </article>
        <article className= 'portfolio__item'>
          <div className = "portfolio__item-image">
            <img src={IMG2} alt="Dan's Dishes"/>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href=" https://github.com" className='btn' target='_blank' >Github</a>
          {/* <a href=" https://deploy.com" className='btn btn-primary' target='_blank'>Live Demo</a> */}
        </article>
        <article className= 'portfolio__item'>
          <div className = "portfolio__item-image">
            <img src={IMG3} alt="Client Demo"/>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href=" https://github.com" className='btn' target='_blank' >Github</a>
          {/* <a href=" https://deploy.com" className='btn btn-primary' target='_blank'>Live Demo</a> */}
        </article>
      </div>
    
    </section>
  )
}

export default Portfolio