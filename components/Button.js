import { Button } from "@mui/material";
import styles from '../styles/Buttons.module.css'

export default function Buttons({children}) {
  return (
<Button className={styles.button}>{children}</Button>
  );
}


