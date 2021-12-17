function Button(props) {
  return <button className={props.className}>{props.text}</button>;
}

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button className="like button" text="Like" />>
      <Button className="comment button" text="Comment" />>
      <Button className="share button" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
