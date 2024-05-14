import * as React from 'react';
import { Hero } from '../component/Hero';

export interface IDepartmentProps {
}

export function Department(props: IDepartmentProps) {
  return (
    <div>
      <Hero title='cardio' />
    </div>
  );
}
