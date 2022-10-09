// import SouthIcon from '@mui/icons-material/South'
// import Date from '../components/Date'
// import styles from '../styles/Buttons.module.css'

// export default function Button() {
//   return (
//     <>
//       <div className={styles.buttons}>
//         <Button className={styles.buttonBlack}>
//           &nbsp;
//           <SouthIcon />
//         </Button>
//         <Date className={styles.date}></Date>
//       </div>
//     </>
//   )
// }

import React, { useState } from 'react'

export default function Button(props) {
  return (
    <>
      <button
        href={props.children}
        sx={{ cursor: 'pointer' }}
        className="buttons"
      >
        {props.children}
      </button>
    </>
  )
}
