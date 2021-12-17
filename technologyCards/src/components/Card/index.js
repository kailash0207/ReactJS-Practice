import './index.css'

const Card = props => {
  const {data} = props
  const {title, description, imgUrl, className} = data
  const element = (
    <div className={`card ${className}`}>
      <div className="card-text">
        <h1 className="card-heading">{title}</h1>
        <p className="card-para">{description}</p>
      </div>
      <div className="card-image-container">
        <img src={imgUrl} alt={title} />
      </div>
    </div>
  )
  return element
}

export default Card
