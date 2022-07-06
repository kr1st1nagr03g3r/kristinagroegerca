import { Button } from "@mui/material";
import styles from '../styles/ButtonPink.module.css'

export default function ButtonPink({children}) {
  return (
<Button className={styles.button}>{children}</Button>
  );
}


