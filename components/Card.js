import styles from '../styles/CardContent.module.css';
import Image from 'next/image';

export default function CardContent({children}){
    return(
        <>
            <div className={styles.card}>
            {children}
    
            </div>
        </>
    )
}