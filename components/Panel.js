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

const button = {
  cursor: 'pointer',
}

export default function Panel(props) {
  return (
    <Box>
      <Card>
        <div className="imageStyles">
          <Image
            src={props.cardData.icon}
            alt={props.cardData.alt}
            style={Imagecss}
          />
        </div>
        <h3>{props.cardData.header}</h3>
        <p>{props.cardData.name}</p>
        <p>{props.cardData.content}</p>
        <Button href={props.cardData.link}>{props.cardData.buttonText}</Button>
      </Card>
    </Box>
  )
}
