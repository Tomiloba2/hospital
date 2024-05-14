import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from '../home.module.scss'
import { MdSearch } from 'react-icons/md';

export interface INavbarProps {
}

export function Navbar(props: INavbarProps) {
    return (
        <div className={styles.nav}>
            <section>
                <article>
                    <ul>
                        <li>
                            <Link to={'department'}>Departments</Link>
                        </li>
                        <li>
                            <Link to={''}>About us</Link>
                        </li>
                        <li>
                            <Link to={''}>Hotline</Link>
                        </li>
                    </ul>
                </article>
                <article>
                    <input type="search" placeholder='search' name="" id="" />
                </article>
            </section>
        </div>
    );
}
