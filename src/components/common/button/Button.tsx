import React from 'react'
import { Button } from '@mui/material'
import '../../assets/fonts/Fonts.css';
// import './Button.css';

export default function CommonButton() {
  return (
    < Button style={{ fontFamily: 'PoppinsRegular', backgroundColor: "rgba(242, 193, 188, 0.5)", color: 'black', border: '1px solid black'}} variant='contained' className='commonButton'>
        Common button
    </Button>
  )
}
