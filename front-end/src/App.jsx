import {Box, Button, Slider, Stack, Typography, List, ListItem} from '@mui/material'
import TopButton from './components/Button/TopButton';
import axios from 'axios';
import React, { createContext, useState } from 'react'
import Webcam from "react-webcam";


function App() {
//   const list_of_movies = [
    // {
    //   "movie_id": 4662,
    //   "title": "The Shawshank Redemption",
    //   "image_url": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    //   "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //   "calm_score": 1.0,
    //   "cheerful_score": 6.0,
    //   "awake_score": 9.0,
    //   "fearless_score": 2.0
    // },
    // {
    //   "movie_id": 4337,
    //   "title": "The Godfather",
    //   "image_url": "https://image.tmdb.org/t/p/original/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg",
    //   "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //   "calm_score": 2.0,
    //   "cheerful_score": 4.0,
    //   "awake_score": 9.0,
    //   "fearless_score": 6.0
    // },
    // {
    //   "movie_id": 1619,
    //   "title": "The Dark Knight",
    //   "image_url": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    //   "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //   "calm_score": 1.0,
    //   "cheerful_score": 7.0,
    //   "awake_score": 10.0,
    //   "fearless_score": 6.0
    // },
    // {
    //   "movie_id": 8112,
    //   "title": "Pulp Fiction",
    //   "image_url": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    //   "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //   "calm_score": 3.0,
    //   "cheerful_score": 4.0,
    //   "awake_score": 6.6,
    //   "fearless_score": 5.0
    // },
    // {
    //   "movie_id": 9743,
    //   "title": "Forrest Gump",
    //   "image_url": "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    //   "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //   "calm_score": 5.0,
    //   "cheerful_score": 8.0,
    //   "awake_score": 5.0,
    //   "fearless_score": 1.0
    // },
    // {
    //   "movie_id": 2013,
    //   "title": "Inception",
    //   "image_url": "https://image.tmdb.org/t/p/original/9egFcRMV4Z3ZdcaJAYoxmnbqZE7.jpg",
    //   "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //   "calm_score": 2.0,
    //   "cheerful_score": 6.0,
    //   "awake_score": 10.0,
    //   "fearless_score": 3.0
    // },
    // // {
    // //   "movie_id": 6658,
    // //   "title": "The Matrix",
    // //   "image_url": "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    // //   "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    // //   "calm_score": 3.0,
    // //   "cheerful_score": 8.0,
    // //   "awake_score": 8.0,
    // //   "fearless_score": 3.0
    // // },
    // // {
    // //   "movie_id": 3662,
    // //   "title": "Fight Club",
    // //   "image_url": "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    // //   "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    // //   "calm_score": 2.0,
    // //   "cheerful_score": 4.0,
    // //   "awake_score": 6.5,
    // //   "fearless_score": 4.0
    // // },
    // // {
    // //   "movie_id": 3917,
    // //   "title": "Goodfellas",
    // //   "image_url": "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    // //   "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    // //   "calm_score": 2.0,
    // //   "cheerful_score": 5.0,
    // //   "awake_score": 7.0,
    // //   "fearless_score": 4.0
    // // }
  //]
   const [calmScore, setCalmScore] = useState(0);
   const [cheerfulScore, setCheerfulScore] = useState(0);
   const [awakeScore, setAwakeScore] = useState(0);
   const [fearlessScore, setFearlessScore] = useState(0);
   const [list_of_movies, setListOfMovies] = useState([]);
//    const [movieList, setMovieList] = useState([]);
   const URL = "http://localhost:3000"
   
//    const movieList = list_of_movies.map((item, index) => (
//     <ListItem key={index}>
//       <Box
//         component="img"
//         sx={{
//           height: 100,
//           width: 100,
//           maxHeight: { xs: 233, md: 167 },
//           maxWidth: { xs: 350, md: 250 },
//           cursor: 'pointer'
//         }}
//         alt=""
//         src={item.image_url}
//         onClick={() => {
//             window.open(item.video_url, "_blank");
//         }}
//       />
//     </ListItem>
//   ));

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
                // setMovieList(response.data);
                setListOfMovies(response.data);
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
            {list_of_movies.map((item, index) => (
                <ListItem key={index}>
                <Box
                    component="img"
                    sx={{
                    height: 100,
                    width: 100,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    cursor: 'pointer'
                    }}
                    alt=""
                    src={item.get(2)}
                    onClick={() => {
                        window.open(item.get(3), "_blank");
                    }}
                />
                </ListItem>
            ))}
          </Stack>
        </List>
      </Stack>
    </Stack>

  )
}

export default App;
