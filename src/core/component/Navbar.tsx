import * as React from 'react';
import styles from '../core.module.scss'
import { Link, NavLink } from 'react-router-dom';

export interface INavbarProps {
}

export function Navbar(props: INavbarProps) {
    return (
        <nav className={styles.nav}>
            <article>
                <section>
                    <h1>
                        Medics
                    </h1>
                </section>
                <section>
                    <ul>
                        <li>
                            <NavLink to='/'>Patients</NavLink>
                        </li>
                        <li>
                            <NavLink to='/h'>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to='/kk'>Staff</NavLink>
                        </li>
                    </ul>
                </section>
                <section className={styles.btn}>
                    <button className='btn-secondary'>
                        Log In
                    </button>
                    <button className='btn-primary'>
                        Sign Up
                    </button>
                </section>
            </article>
        </nav>
    );
}
