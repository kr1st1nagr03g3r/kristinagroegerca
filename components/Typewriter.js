import styles from '../styles/Typewriter.module.css'
import { Container } from '@mui/system'


export default function Typewriter({children}) {
    return (

<div className={styles.wrapper}>
<Container>
    <div className={styles.typing}>
      {children}
    </div>
    </Container>
</div>

    )
}