import classNames from "classnames";
import styles from "./Title.module.scss";

type TagName = "h1" | "h2";

interface TitleProps {
  className?: string;
  children: string;
  tag: TagName;
  isCentered?: boolean;
}

export const Title = ({className, children, tag, isCentered}: TitleProps) => {
  const H = tag;
  const allStyles = classNames(
    styles[tag],
    {[styles.isCentered]: isCentered},
    className,
  );

  return <H className={allStyles}>{children}</H>;
};
