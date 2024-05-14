import * as React from 'react';
import { Hero } from '../component/Hero';
import styles from '../home.module.scss'
import { useNavigate } from 'react-router-dom';

export interface IDepartmentsProps {
}

export function Departments(props: IDepartmentsProps) {
  const navigate=useNavigate()
  const departments=[
    {
      img:"",
      title:'Cardiology',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consectetur velit? Beatae natus quo minima vitae magnam illo inventore non eaque in! Nemo tempora repudiandae ratione optio perferendis ipsum. Officia.',
      link:'/department/cardiology'
    },
    {
      img:'',
      title:'Gastroenterology',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consectetur velit? Beatae natus quo minima vitae magnam illo inventore non eaque in! Nemo tempora repudiandae ratione optio perferendis ipsum. Officia.',
      link:'/department/gastroenterology'
    },
    {
      img:'',
      title:'Colonoscopy',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consectetur velit? Beatae natus quo minima vitae magnam illo inventore non eaque in! Nemo tempora repudiandae ratione optio perferendis ipsum. Officia.',
      link:'/department/colonoscopy'
    },
    {
      img:'',
      title:'Clinical Laboratory',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consectetur velit? Beatae natus quo minima vitae magnam illo inventore non eaque in! Nemo tempora repudiandae ratione optio perferendis ipsum. Officia.',
      link:'/department/Clinical-laboratory'
    },
    {
      img:'',
      title:'Neurology',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consectetur velit? Beatae natus quo minima vitae magnam illo inventore non eaque in! Nemo tempora repudiandae ratione optio perferendis ipsum. Officia.',
      link:'/department/neurology'
    },
    {
      img:'',
      title:'Radiology & Imaging',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consectetur velit? Beatae natus quo minima vitae magnam illo inventore non eaque in! Nemo tempora repudiandae ratione optio perferendis ipsum. Officia.',
      link:'/department/radiology'
    },
    {
      img:'',
      title:'Fibroscan',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consectetur velit? Beatae natus quo minima vitae magnam illo inventore non eaque in! Nemo tempora repudiandae ratione optio perferendis ipsum. Officia.',
      link:'/department/fibroscan'
    },
    {
      img:'',
      title:'Pulmonary',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consectetur velit? Beatae natus quo minima vitae magnam illo inventore non eaque in! Nemo tempora repudiandae ratione optio perferendis ipsum. Officia.',
      link:'/department/pulmonary'
    },
    {
      img:'',
      title:'Molecular Lab',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consectetur velit? Beatae natus quo minima vitae magnam illo inventore non eaque in! Nemo tempora repudiandae ratione optio perferendis ipsum. Officia.',
      link:'/department/Molecular-Lab'
    },
  ]
  return (
    <div className={styles.departments}>
      <section>
        <Hero title='department' />
      </section>
      <section className={styles.section}>
        <h4>All Departments</h4>
        <section>
          {departments.map((item,id)=>{
            return(
              <article key={id}>
                <div>
                  <img src='' alt=''/>
                </div>
                <section>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <button onClick={()=>navigate(item.link)}>book Appointment</button>
                </section>
              </article>
            )
          })}
        </section>
      </section>
    </div>
  );
}
