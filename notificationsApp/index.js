function Notification(props) {
  console.log("hello");
  return (
    <div className={`notify-container ${props.class}`}>
      <img src={props.src} className="icon" />
      <p className="message">{props.text} Message</p>
    </div>
  );
}

const element = (
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <Notification
      class="info-cont"
      text="Information"
      src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      class="success-cont"
      text="Success"
      src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      class="warning-cont"
      text="Warning"
      src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      class="error-cont"
      text="Error"
      src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
