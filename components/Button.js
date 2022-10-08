import SouthIcon from '@mui/icons-material/South'
import Date from '../components/Date'
import styles from '../styles/Buttons.module.css'

// & Old Button
// export default function Button() {
//     return (
//         <>
//             <div className={styles.buttons}>
//                 <Button className={styles.buttonBlack}>&nbsp;<SouthIcon /></Button>
//                 <Date className={styles.date}></Date>
//             </div>
//         </>
//     );
// }

import React, { useState } from 'react'

export default function Button(props) {
  const [size] = useState(props.size)
  const [variant] = useState(props.variant)
  return (
    <>
      <button className={`btn-${variant} btn-${size}`}>{props.children}</button>
    </>
  )
}
