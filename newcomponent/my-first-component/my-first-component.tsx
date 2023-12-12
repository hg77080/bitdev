import type { ReactNode } from 'react';
import './my-first-componen.scss';

export type MyFirstComponentProps = {
  children?: ReactNode;
  buttonText:String;
  variant?:'secondary' | 'primary';
  size?:'sm' | 'lg' | 'md';

};

export function MyFirstComponent({ children
,buttonText,variant='primary',size='md',...rest}: MyFirstComponentProps) {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  const style = {
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
  }
  return (
    <button className={`${variant} button_container`} type='button' style={style} {...rest}>{children} {buttonText}</button>
  ); 
}
