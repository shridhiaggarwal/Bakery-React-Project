import React from "react";
import buttonStyles from './button.module.css'

interface IButtonProps {
  children: string;
}

function Button(props: IButtonProps) {
  const { children } = props;
  return <button className={buttonStyles.commonButton}>{children}</button>;
}

export default Button;
