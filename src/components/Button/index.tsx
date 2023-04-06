import React from "react";
import './button.css'

interface IButtonProps {
  content: string;
}

function Button(props: IButtonProps) {
  const { content } = props;
  return <button className="commonButton">{content}</button>;
}

export default Button;
