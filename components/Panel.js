import { Box, Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Imagecss = {
  borderRadius: '50px',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  // maxHeight: '300px',
}

const content = {
  padding: '15px',
}

const imageStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const specialHeader = {
  marginTop: '1rem',
}

const boxStyles = {
  maxWidth: '500px',
}

export default function Panel(props) {
  return (
    <Box style={boxStyles}>
      <Card>
        <div style={imageStyles}>
          <Image
            layout="fill"
            src={props.cardData.icon}
            alt={props.cardData.alt}
            style={Imagecss}
          />
        </div>
        <div style={content}>
          <h4 style={specialHeader}>{props.cardData.header}</h4>
          <p>{props.cardData.name}</p>
          <p>{props.cardData.content}</p>
          <span style={imageStyles}>
            <Button href={props.cardData.link}>
              {props.cardData.buttonText}
            </Button>
          </span>
        </div>
      </Card>
    </Box>
  )
}
