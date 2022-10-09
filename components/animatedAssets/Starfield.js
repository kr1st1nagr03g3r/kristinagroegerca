import styles from '/styles/animatedAssets/Starfield.module.css'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Logos from './Logos.js'

export default function Starfield({}) {
  return (
    <>
      <Container maxWidth disableGutters={true} className={styles.container}>
        <section>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
          <span className={styles.star}>.</span>
        </section>
        <Container
          maxWidth="lg"
          className={styles.wrapper}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'left',
            width: '80%',
            position: 'relative',
          }}
        >
          <Box sx={{ width: '50%' }} className={styles.boxWrapper02}>
            <Logos />
          </Box>
          <Box
            sx={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
            className={styles.boxWrapper01}
          >
            <div className={styles.content}>
              <h2 className="font-serif white right">
                I&apos;m comfortable working with a diverse range of tech and
                tools
              </h2>
              <div className={styles.button}>
                <Button className={` buttons ${styles.buttons}`} href="/work">
                  See More
                </Button>
              </div>
            </div>
          </Box>
        </Container>
      </Container>
    </>
  )
}
