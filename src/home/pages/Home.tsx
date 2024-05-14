import * as React from 'react';
import { Hero } from '../component/Hero';

export interface IHomeProps {
}

export function Home (props: IHomeProps) {
  return (
    <div>
      <Hero title='home'/>
    </div>
  );
}
