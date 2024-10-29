/* eslint-disable @typescript-eslint/no-unused-vars */

import Q5U3ZLogomakrPng from '../../assets/4q5u3z-logomakr.png';
import styles from './Header.module.scss';
import className from 'classnames';
import { Link } from 'react-router-dom';

export interface HeaderProps {
    className?: string;
    selectedButton?: 'Designs' | 'Updates' | 'Buy Now';
    
} 

export const Header = ({ className, selectedButton }: HeaderProps) => {
    return (
        <div className={styles.header}>
         <Link to={'/'} className={styles.logo}>
            <div className={styles.logo}>
                <img className={styles.bydesignLogo} alt="" src={Q5U3ZLogomakrPng} />
                <b className={styles.bydesigncode}>By Design</b>
            </div>
            </Link>
           
            <div className={styles.header1}>
                <div className={styles.button}>
                <Link to={"/browse"} className={`${styles.button} ${selectedButton === 'Designs' ? styles.selected : ''}`}>
                    <div className={styles.designs}>Designs</div>

                    <div className={styles.info}>
                        <div className={styles.total}>Total</div>
                        <div className={styles.div}>252</div>
                    </div>
                    </Link> 
                </div>
              
                <Link
                    to={'/updates'}
                    className={`${styles.button} ${
                        selectedButton === 'Updates' ? styles.selected : ''
                    }`}
                >
                <div className={styles.button1}>
                    <div className={styles.designs}> Updates</div>
                    <div className={styles.info}>
                        <div className={styles.total}>2024</div>
                        <div className={styles.div}>August</div>
                    </div>
                    
                </div>
                </Link>
              


                <div className={styles.button1}>
                    <div className={styles.designs}>Buy Now</div>
                    <div className={styles.info}>
                        <div className={styles.total}>Early</div>
                        <div className={styles.div}>Access</div>
                    </div>
                </div>
            </div>
        </div>
    );
};