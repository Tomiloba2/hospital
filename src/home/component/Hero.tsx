import * as React from 'react';
import sty from '../../assets/fan8.webp'
import styles from '../home.module.scss'
import { MdSearch } from 'react-icons/md';

export interface IHeroProps {
    title: 'cardio' | "department" | "home"
}

export function Hero(props: IHeroProps) {
    const { title } = props
    return (
        <div className={styles.hero}>
            {title === 'cardio' ? (
                <>
                    <article style={{
                        backgroundImage: `linear-gradient(to right, rgba(109, 179, 242, .6), rgba(109, 179, 242, .6)),url(${sty})`,
                        backgroundPosition: "center,center",
                        backgroundRepeat: "no-repeat, no-repeat",
                        backgroundSize: "cover, cover",
                        minHeight: '45vh'
                    }}>
                        <div className={styles.overlay}>
                            <div>
                                <section>
                                    <h4>Providing The <span>Advanced</span> Care You Need.</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dicta? A dolorum autem atque eaque reiciendis, ab odit laboriosam? Labore, rem. Minima aliquid dicta culpa omnis illo perspiciatis quidem facere.
                                    </p>
                                    <button> Appointment now</button>
                                </section>
                            </div>
                        </div>
                    </article>
                </>
            ) : title === 'department' ? (
                <>
                    <article style={{
                        backgroundImage: `linear-gradient(to right, rgba(109, 179, 242, .6), rgba(109, 179, 242, .6)),url(https://plus.unsplash.com/premium_photo-1664303363680-4c8f8e504694?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWxzfGVufDB8fDB8fHww)`,
                        backgroundPosition: "center,center",
                        backgroundRepeat: "no-repeat, no-repeat",
                        backgroundSize: "cover, cover",
                        minHeight: '45vh'
                    }}>
                        <div className={styles.overlay}>
                            <div>
                                <h4>Our Department</h4>
                            </div>
                            <form>
                                <input type="search" placeholder='search through our departments' />
                                <button><MdSearch /></button>
                            </form>
                        </div>
                    </article>
                </>
            ) : (
                <>
                    <article style={{
                        backgroundImage: `linear-gradient(to right, rgba(109, 179, 242, .6), rgba(109, 179, 242, .6)),url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zcGl0YWxzfGVufDB8fDB8fHww)`,
                        backgroundPosition: "center,center",
                        backgroundRepeat: "no-repeat, no-repeat",
                        backgroundSize: "cover, cover",
                        minHeight: '45vh'
                    }}>
                        <div className={styles.overlay}>
                            <div>
                                <section>
                                    <h4>Providing The <span>Advanced</span> Care You Need.</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dicta? A dolorum autem atque eaque reiciendis, ab odit laboriosam? Labore, rem. Minima aliquid dicta culpa omnis illo perspiciatis quidem facere.
                                    </p>
                                    <button className={styles.btn}> Appointment now</button>
                                </section>
                            </div>
                        </div>
                    </article>
                </>
            )}
        </div>
    );
}
