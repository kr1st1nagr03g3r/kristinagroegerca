import { Box, Card } from '@mui/material'
import Image from 'next/future/image'
import React from 'react'
import Button from './Button'

const Imagecss = {
  borderRadius: '50px',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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

export default function Panel(props) {
  return (
    <Box>
      <Card>
        <div style={imageStyles}>
          <Image
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
