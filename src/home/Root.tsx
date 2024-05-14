import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './component/Navbar';

export interface IHomeRootProps {
}

export function HomeRoot(props: IHomeRootProps) {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <Outlet />
    </div>
  );
}
