import styles from '../styles/Typewriter.module.css'
import { Container } from '@mui/system'


export default function Typewriter({children}) {

  
    Typewriter = function() {
        this.each(function() {
          var c = document.querySelector(this),
            b = c.html(),
            a = 0,
            d = 0;
          c.html("");
          var e = function() {
            if ("<" == b.substring(a, a + 1)) {
              var f = new RegExp(/<span class="instant"/),
                g = new RegExp(/<span class="clear"/);
              if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
              else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
              else
                for (;
                  ">" != b.substring(a, a + 1);) a++
            }
            c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
            a >= b.length || setTimeout(e, 70 + 100 *
              Math.random())
          };
          e()
        });
        return this
      };
      document.querySelector(".terminal").typewriter();

    return (

<div className={styles.wrapper}>
<Container>
<div className={styles.terminal}>
    <span className={styles.dollar}></span> hi there, i&apos;m john
    <br/>
    <span className={styles.dollar}></span> a web developer
    <br/>
    <span className={styles.dollar}></span> based in uk
    <br/>
    <span className={styles.dollar}></span> i drink a lot of tea
    <br/>
    <span className={styles.dollar}></span> and build beautiful websites
  </div>
    </Container>
</div>

    )
}