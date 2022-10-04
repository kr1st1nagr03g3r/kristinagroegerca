import styles from '../styles/CardContent.module.css'

export default function CardContent({ children }) {
  return (
    <>
      <div className={styles.card}>{children}</div>
    </>
  )
}
