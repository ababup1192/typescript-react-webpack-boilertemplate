import * as React from "react";
import * as ReactDOM from "react-dom";
import * as calculations from "./calculation";

interface ICommentBoxProps extends React.Props<any> {
  value: number;
  user: string;
  link: string;
}

class CommentBox extends React.Component<ICommentBoxProps, any> {
  render() {
    const value: number = this.props.value;
    return <div className="commentBox">
      Hello, world! It is comment posted by <a href={this.props.link}>{this.props.user}</a>.
      <p>value = {this.props.value}</p>
      <p>value + value = {calculations.add(value, value) }</p>
      <p>value * value = {calculations.multiply(value, value) }</p>
    </div>;
  }
}

ReactDOM.render(
  <CommentBox value={12} user="ababup1192" link="https://github.com/ababup1192" />,
  document.getElementById("content")
);