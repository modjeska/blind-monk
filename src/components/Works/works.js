import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '../card'

const works = () => {
let projects = [{
  title:'Coding Quiz',
  gitHub:'https://github.com/modjeska/yana-lavender',
  deployment:'https://modjeska.github.io/yana-lavender/',
  image: 'https://media4.giphy.com/media/QS9kB3KLL6IfM5HF1l/giphy.gif',
  desc: 'Check out the links below!'
},
{
  title:'Note Taker',
  gitHub:'https://github.com/modjeska/rumero-blue',
  deployment:'https://note-taker-modjeska.herokuapp.com/',
  image: 'https://media2.giphy.com/media/13c2hnbwIy1TCf6pVg/giphy.gif?cid=790b761158663b17457319359e1db4cf260eb7459bcfb808&rid=giphy.gif&ct=g',
  desc: 'Check out the links below!'
},
{
  title:'Weather Hub',
  gitHub:'https://github.com/modjeska/future-ice',
  deployment:'https://modjeska.github.io/future-ice/',
  image: 'https://media4.giphy.com/media/rCui7QADY0fVclST4W/giphy.gif?cid=790b76114426444e003a19ada99afad5d6630f370bd833fe&rid=giphy.gif&ct=g',
  desc: 'Check out the links below!'
},
{
  title:'Dinner With Schmucks',
  gitHub:'https://github.com/DesertCow/DinnerWithSchmucks',
  deployment:'https://desertcow.github.io/DinnerWithSchmucks/',
  image: 'https://media0.giphy.com/media/P10suT2Z44Y9el5nC8/giphy.gif?cid=790b761154b32b6ff5d9ff6637f251340a2879d633ed7854&rid=giphy.gif&ct=g',
  desc: 'Check out the links below!'
},
{
  title:'PokéData',
  gitHub:'https://github.com/Godoflaugh/OG-Pokemon-Cards',
  deployment:'https://github.com/Godoflaugh/OG-Pokemon-Cards',
  image: 'https://media1.giphy.com/media/7mPvVz5qdGW7IvoVtJ/giphy.gif?cid=790b76116c4fceac539cf5844862bc6e19750c8efbc787c1&rid=giphy.gif&ct=g',
  desc: 'Check out the links below!'
},
{
  title:'Day Scheduler',
  gitHub:'https://github.com/modjeska/xylo-alpha',
  deployment:'https://modjeska.github.io/xylo-alpha/',
  image: 'https://media3.giphy.com/media/ZEaMNnLTaE6fYABQK7/giphy.gif?cid=790b7611b589629e5e238713c1d5bb02914b9121c9fbfa3c&rid=giphy.gif&ct=g',
  desc: 'Check out the links below!'
}]

  return (
    <>
    <Grid container justifyContent="center">
      <h1>Previous Works</h1>
    </Grid>
    <Grid container spacing={6} padding={2} justifyContent="center">
      {projects.map(project => 
        <Grid item>
          <Card desc={project.desc} title={project.title} github={project.gitHub} deployment={project.deployment} image={project.image}></Card>
        </Grid>
      )}
    </Grid>
    </>
  )
}

export default works