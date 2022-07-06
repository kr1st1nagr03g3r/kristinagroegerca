import React, { useState } from "react";
// import ReactDOM from "react-dom";
import useMightyMouse from "react-hook-mighty-mouse";
import styles from '../styles/Eyeball.module.css'
// import { Svg, Circle, Rect, Ellipse } from 'react-svg-path';


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
  // Remove the second eye for now
  // const rotateRightEye = `rotate(${-angleRightEye}deg)`;

  return (
    <>
      <div className={styles.eyesFollow}>
        <div className={styles.eyes}>
          <div id="left-eye" className={styles.eye} style={{ transform: rotateLeftEye }}>
            <div className={styles.pupil} />
          </div>
          {/* Remove the second eye for now
        <div id="right-eye" className={styles.eye} style={{ transform: rotateRightEye }}>
          <div className={styles.pupil}  />
        </div> */}
        </div>
      </div>


      <div>
        <div>
          <h1>Hello</h1>


        </div>
      </div>

    </>
  );
};

export default EyesFollow;