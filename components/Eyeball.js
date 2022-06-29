import React from 'react';
import useMightyMouse from 'react-hook-mighty-mouse';
import styles from '../styles/Nav.module.css';


const EyesFollow = () => {
  const {
    selectedElement: {
      position: { angle: angleLeftEye },
    },
  } = useMightyMouse(true, 'left-eye', { x: 20, y: 20 });
  // const {
  //   selectedElement: {
  //     position: { angle: angleRightEye },
  //   },
  // } = useMightyMouse(true, 'right-eye', { x: 20, y: 20 });

  const rotateLeftEye = `rotate(${-angleLeftEye}deg)`;
  // const rotateRightEye = `rotate(${-angleRightEye}deg)`;

  return (
    <div className={styles.eyesFollow}>
      <div className={styles.eyes}>
        <div id="left-eye" className={styles.eye} style={{ transform: rotateLeftEye }}>
          <div className={styles.pupil} />
        </div>
        {/* <div id="right-eye" className={styles.eye} style={{ transform: rotateRightEye }}>
          <div className={styles.pupil} />
        </div> */}
      </div>
    </div>
  );
};

export default EyesFollow;