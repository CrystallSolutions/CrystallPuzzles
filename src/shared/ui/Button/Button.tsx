"use client";

import classNames from "classnames";
import styles from "./Button.module.scss";

type ButtonColors = "dark" | "light";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: ButtonColors;
  id?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  className,
  bgColor = "light",
  id,
  onClick,
}: ButtonProps) => {
  const buttonStyles = classNames(styles.btn, styles[bgColor], className);

  return (
    <button className={buttonStyles} id={id} onClick={onClick}>
      {children}
    </button>
  );
};
