import { Box, Grid } from '@mui/material'
import React from 'react'
import HeadingText from '../../components/HeadingText/HeadingText'
import './Believe.css'
const Believe = () => {
  return (
    <div className="believe">
        <HeadingText text={'What we believe'}/>
        <Grid container className='believe-box-container'  justifyContent={'space-around'} column-spacing={2}>
            <Grid item className="believe-box"><div className="center-text">Quality Education & Learning</div></Grid>
            <Grid item className="believe-box"><div className="center-text">REDUCED INEQUALITY</div></Grid>
            <Grid item className="believe-box"><div className="center-text">GENDER EQUALITY</div></Grid>
            <Grid item className="believe-box"><div className="center-text">CLIMATE ACTION</div></Grid>
            <Grid item className="believe-box"><div className="center-text">REDUCED INEQUALITY</div></Grid>
        </Grid>
    </div>
  )
}

export default Believe