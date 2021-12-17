function Box(props) {
  return (
    <div className={`box ${props.class}`}>
      <h1>{props.text}</h1>
    </div>
  );
}

const element = (
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box class="sm-box" text="Small" />
      <Box class="md-box" text="Medium" />
      <Box class="lg-box" text="Large" />>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
