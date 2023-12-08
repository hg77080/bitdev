import type { ReactNode } from 'react';

export type MyFirstComponentProps = {
  children?: ReactNode;
};

export function MyFirstComponent({ children }: MyFirstComponentProps) {
  return (
    <div style={{backgroundColor:"red",color:"#fff",borderRadius:"1rem"}}>
      {children}
    </div>
  );
}
