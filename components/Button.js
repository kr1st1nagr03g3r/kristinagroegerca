// import * as React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import { useButton } from '@mui/base/ButtonUnstyled';
// import { styled } from '@mui/system';
// import Stack from '@mui/material/Stack';

// const blue = {
//   500: '#007FFF',
//   600: '#0072E5',
//   700: '#0059B2',
// };

// const CustomButtonRoot = styled('button')`
//     border: 3px solid black;
//     padding: 15px 30px;
//     color: black;
//     background-color: white;
//     border-radius: 50px;
//     font-weight: bolder;
//     box-shadow: 3px 3px black;
//     font-family: 'Asul';
//     font-size: 22px;
//     text-transform: none;
//     margin: 30px 0px 15px 0px;  

//   &:hover {
//     background-color: ${blue[600]};
//     color: white;
//   }

//   &.active {
//     background-color: ${blue[700]};
//   }

//   &.focusVisible {
//     box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
//     outline: none;
//   }

//   &.disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// const CustomButton = React.forwardRef(function CustomButton(props, ref) {
//   const { children } = props;
//   const { active, disabled, focusVisible, getRootProps } = useButton({
//     ...props,
//     ref,
//   });

//   const classes = {
//     active,
//     disabled,
//     focusVisible,
//   };

//   return (
//     <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
//       {children}
//     </CustomButtonRoot>
//   );
// });

// CustomButton.propTypes = {
//   children: PropTypes.node,
// };

// export default function UseButton({children}) {
//   return (
//     <Stack spacing={2} direction="row">
//       <CustomButton onClick={() => console.log('click!')}>{children}</CustomButton>
//       {/* <CustomButton disabled>Disabled</CustomButton> */}
//     </Stack>
//   );
// }