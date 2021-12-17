/* eslint-disable react/button-has-type */
import './index.css'

const Banner = props => {
  const {data} = props
  const {headerText, description, className} = data
  const element = (
    <div className={`card ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button">Show More</button>
      </div>
    </div>
  )
  return element
}

export default Banner
