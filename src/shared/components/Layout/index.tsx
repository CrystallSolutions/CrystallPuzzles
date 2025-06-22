import style from './index.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: Props) {
  return <body className={style.layout + ' ' + className}>{children}</body>;
}

export function LayoutHeader({ children, className }: Props) {
  return <header className={style.header + ' ' + className}>{children}</header>;
}

export function LayoutFooter({ children, className }: Props) {
  return <footer className={style.footer + ' ' + className}>{children}</footer>;
}

export function LayoutMain({ children, className }: Props) {
  return <main className={style.main + ' ' + className}>{children}</main>;
}

export function LayoutSidebar({ children, className }: Props) {
  return <div className={style.sidebar + ' ' + className}>{children}</div>;
}

export function Modal({ children, className }: Props) {
  return <div className={style.modal + ' ' + className}>{children} </div>;
}
