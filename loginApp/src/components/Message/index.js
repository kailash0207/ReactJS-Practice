import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  return (
    <h1 className="message">{isLoggedIn ? 'Welcome User' : 'Please Login'}</h1>
  )
}

export default Message
