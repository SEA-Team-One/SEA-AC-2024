import {Box, Button, Slider, Stack, Typography, List, ListItem} from '@mui/material'
import TopButton from './components/Button/TopButton';
import axios from 'axios';
import React, { createContext, useState } from 'react'
import Webcam from "react-webcam";


function App() {
  const list_of_movies = [
    [1, "Goodfellas", "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]
  ]

  const movieListHandler = list_of_movies.map((item, index) => (
    <ListItem key={index}>
      <Box
        component="img"
        sx={{
          height: 100,
          width: 100,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt=""
        src={item[2]}
      />
    </ListItem>
  ));
   const [calmScore, setCalmScore] = useState(0);
   const [cheerfulScore, setCheerfulScore] = useState(0);
   const [awakeScore, setAwakeScore] = useState(0);
   const [fearlessScore, setFearlessScore] = useState(0);
   const [movieList, setMovieList] = useState([]);
   const URL = "http://localhost:3000"
   

  return (
    <Stack direction={'column'} spacing={4} sx={{padding: 20,}}>
      <Stack direction={'row'} spacing={25}>
      <Box
        component="img"
        sx={{
          height: 100,
          width: 100,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt=""
        src={"./src/assets/Sky_Group_logo_2020.svg"}
      />
      <Box alignContent={'center'}>
      <Typography variant='h3' alignItems={'center'}>Mood Slider</Typography>
      </Box>
      </Stack>
      <Stack direction={'row'} spacing={4}>
        <TopButton text="Use Webcam" styling="contained" onPressed={() => {
            
        }}/>
        <TopButton text="Choose File" styling="outlined" onPressed={() => {}}/>   
        <TopButton text="Submit" styling="contained" onPressed={() => {
            axios.post({URL}+'/movies', {
                calm_score: calmScore,
                cheerful_score: cheerfulScore,
                awake_score: awakeScore,
                fearless_score: fearlessScore
            }).then(function (response) {
                console.log(response);
                setMovieList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }}/>
      </Stack>
      <Stack direction={'column'} spacing={4}>
        <Stack direction={'row'} spacing={4}>
          <Typography>Calm</Typography>
          <Slider value={calmScore} min={1} max={10} step={1} onChange={(e, val) => {
            setCalmScore(val);
          }}></Slider>
        </Stack>
        <Stack direction={'row'} spacing={4}>
          <Typography>Cheerful</Typography>
          <Slider value={cheerfulScore} min={1} max={10} step={1} onChange={(e, val) => {
            setCheerfulScore(val);
          }}></Slider>
        </Stack>
        <Stack direction={'row'} spacing={4}>
          <Typography>Awake</Typography>
          <Slider value={awakeScore} min={1} max={10} step={1} onChange={(e, val) => {
            setAwakeScore(val);
          }}></Slider>
        </Stack>
        <Stack direction={'row'} spacing={4}>
          <Typography>Fearless</Typography>
          <Slider value={fearlessScore}  min={1} max={10} step={1} onChange={(e, val) => {
            setFearlessScore(val);
          }}></Slider>
        </Stack>
      </Stack>
      <Stack direction={'row'} spacing={4}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
          <Stack direction={'row'} spacing={4}>
            {movieListHandler}
          </Stack>
        </List>
      </Stack>
    </Stack>

  )
}

export default App;
