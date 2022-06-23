import { Box, Grid } from '@mui/material'
import React from 'react'
import HeadingText from '../../components/HeadingText/HeadingText'
import './Believe.css'
const Believe = () => {
  return (
    <div className="believe">
        <HeadingText text={'What we believe'}/>
        <Grid container className='believe-box-container'>
            <Grid item className="believe-box"><Box className="center-text">Quality Education & Learning</Box></Grid>
            <Grid item className="believe-box"><Box className="center-text">REDUCED INEQUALITY</Box></Grid>
            <Grid item className="believe-box"><Box className="center-text">GENDER EQUALITY</Box></Grid>
            <Grid item className="believe-box"><Box className="center-text">CLIMATE ACTION</Box></Grid>
            <Grid item className="believe-box"><Box className="center-text">REDUCED INEQUALITY</Box></Grid>
        </Grid>
    </div>
  )
}

export default Believe