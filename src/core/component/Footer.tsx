import * as React from 'react';
import styles from '../core.module.scss'
import { Link } from 'react-router-dom';
import { MdPhone, MdMail } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

export interface IFooterProps {
}

export function Footer(props: IFooterProps) {
  return (
    <>
      <footer  className={styles.footer}>
        <article>
          <section>
            <h1>Medica</h1>
            <p>Ibadan Nigeria</p>
            <ul>
              <li><i><MdPhone /></i><span>+123 456 7890</span></li>
              <li><i><MdMail /></i><span>medica@health.co</span></li>
            </ul>
            <div>
              <br />
              <h4>Follow Us</h4>
              <ol>
                <li><i><FaFacebook /></i></li>
                <li><i><FaInstagram /></i></li>
                <li><i><FaTwitter /></i></li>
                <li><i><FaYoutube /></i></li>
                <li><i><FaLinkedin /></i></li>
              </ol>
            </div>
          </section>
          <section>
            <h4>About Us</h4>
            <ul>
              <li>
                <Link to=''>Careers</Link>
              </li>
              <li>
                <Link to=''>Privacy and Policy</Link>
              </li>
              <li>
                <Link to=''>Terms and Condition</Link>
              </li>
              <li>
                <Link to=''>
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to=''>Blogs</Link>
              </li>
              <li>
                <Link to=''>FAQs</Link>
              </li>
            </ul>
          </section>
          <section>
            <h4>Quick links</h4>
            <ul>
              <li>
                <Link to=''>Services</Link>
              </li>
              <li>
                <Link to=''>Doctors</Link>
              </li>
              <li>
                <Link to=''>Gallery</Link>
              </li>
              <li>
                <Link to=''>Sitemap</Link>
              </li>
              <li><Link to=''>FAQs</Link></li>
            </ul>
          </section>
          <section>
            <h4>Opening Hours</h4>
            <ul>
              <li>Mon-Fri(8:00 AM to 10:00 PM)</li>
              <li>Sat-Sun(8:00 AM to 9:00 PM)</li>
            </ul>
          </section>
          <section>
            <h4>FeedBack</h4>
            <p className={styles.p}>
              Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Magni fugiat quos poss
            </p>
            <form action="">
              <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Your name' />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='your email address' />
              </div>
              <div>
                <label htmlFor="">Message</label>
                <input type="text" placeholder='your feedback' />
              </div>
              <div><input type="submit" value={`send`} /></div>
            </form>
          </section>
        </article>
        <div>
          <hr />
          <p className={styles.copyright}>copyright@2024 Medica Health care </p>
        </div>

      </footer>
    </>
  );
}
