import {Box, Button, Slider, Stack, Typography} from '@mui/material'
import TopButton from './components/Button/TopButton';
import axios from 'axios';
import React, { createContext, useState } from 'react'


function App() {
   const [calmScore, setCalmScore] = useState(0);
   const [cheerfulScore, setCheerfulScore] = useState(0);
   const [awakeScore, setAwakeScore] = useState(0);
   const [fearlessScore, setFearlessScore] = useState(0);
   const [movieList, setMovieList] = useState([]);
   const URL = "http://localhost:3000"
   

  return (
    <Stack direction={'column'} spacing={4}>
      <Stack direction={'row'}>
      <Box sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
        ></Box>
        <Typography>Mood Slider</Typography>
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
        <Stack direction={'row'}>
          <Typography>Cheerful</Typography>
          <Slider value={cheerfulScore} min={1} max={10} step={1} onChange={(e, val) => {
            setCheerfulScore(val);
          }}></Slider>
        </Stack>
        <Stack direction={'row'}>
          <Typography>Awake</Typography>
          <Slider value={awakeScore} min={1} max={10} step={1} onChange={(e, val) => {
            setAwakeScore(val);
          }}></Slider>
        </Stack>
        <Stack direction={'row'}>
          <Typography>Fearless</Typography>
          <Slider value={fearlessScore}  min={1} max={10} step={1} onChange={(e, val) => {
            setFearlessScore(val);
          }}></Slider>
        </Stack>
      </Stack>
      <Stack direction={'row'} spacing={4}>
        <Box sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
        ></Box>
        <Box sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
        ></Box>
        <Box sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
        ></Box>
        <Box sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
        ></Box>
        <Box sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
        ></Box>
        <Box sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
        ></Box>
        <Box sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
        ></Box>
      </Stack>
    </Stack>

  )
}

export default App;
