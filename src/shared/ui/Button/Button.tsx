'use client';

import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  className,
  dark = false,
  id,
  onClick,
}: ButtonProps) => {
  const buttonStyles = classNames(
    styles.btn,
    styles[dark ? 'dark' : 'light'],
    className,
  );

  return (
    <button className={buttonStyles} id={id} onClick={onClick}>
      {children}
    </button>
  );
};
