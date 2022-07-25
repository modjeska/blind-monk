import React from 'react'
import Grid from '@mui/material/Grid';
import me from '../../assets/images/me.png'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import './about.css'

const about = () => {
  return (
    <>
    <Box>
      <Grid className="about" justifyContent="center" container padding={2} spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
                <h1>Dante Stargiotti</h1>
                <p>Born in San Jose, California, I spent most of my life hearing about the Silicon Valley tech industry, but never thought much of it.
                    I have tipped my toes in many different subjects including, automotive work, graphic design,
                    video editing, music creation, and a few other side projects. But recently I found an interest in learning programming languages,
                    and got hooked on making some pages with HTML and CSS. I am currently a student at the University of Irvine California, taking the Full Stack Web Developer BootCamp. 
                    Over the summer I have spent many hours learning about different coding languages. I have also been developing problem solving 
                    skills required for creating projects, fixing broken code, and much more. I am very passionate about my new found love for code, 
                    and I look forward to where it takes me.
                </p>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item xs={12} md={3}>
              <Avatar className="avatar" alt="dante-headshot" src={me} sx={{width: 1, height: 1}}></Avatar>
          </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default about