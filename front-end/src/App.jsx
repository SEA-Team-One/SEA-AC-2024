import {Box, Button, Slider, Stack, Typography, List, ListItem} from '@mui/material'

function App() {
  const list_of_movies = [
    {
      "movie_id": 4662,
      "title": "The Shawshank Redemption",
      "image_url": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
      "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "calm_score": 1.0,
      "cheerful_score": 6.0,
      "awake_score": 9.0,
      "fearless_score": 2.0
    },
    {
      "movie_id": 4337,
      "title": "The Godfather",
      "image_url": "https://image.tmdb.org/t/p/original/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg",
      "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "calm_score": 2.0,
      "cheerful_score": 4.0,
      "awake_score": 9.0,
      "fearless_score": 6.0
    },
    {
      "movie_id": 1619,
      "title": "The Dark Knight",
      "image_url": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "calm_score": 1.0,
      "cheerful_score": 7.0,
      "awake_score": 10.0,
      "fearless_score": 6.0
    },
    {
      "movie_id": 8112,
      "title": "Pulp Fiction",
      "image_url": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "calm_score": 3.0,
      "cheerful_score": 4.0,
      "awake_score": 6.6,
      "fearless_score": 5.0
    },
    {
      "movie_id": 9743,
      "title": "Forrest Gump",
      "image_url": "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "calm_score": 5.0,
      "cheerful_score": 8.0,
      "awake_score": 5.0,
      "fearless_score": 1.0
    },
    {
      "movie_id": 2013,
      "title": "Inception",
      "image_url": "https://image.tmdb.org/t/p/original/9egFcRMV4Z3ZdcaJAYoxmnbqZE7.jpg",
      "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "calm_score": 2.0,
      "cheerful_score": 6.0,
      "awake_score": 10.0,
      "fearless_score": 3.0
    },
    // {
    //   "movie_id": 6658,
    //   "title": "The Matrix",
    //   "image_url": "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    //   "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //   "calm_score": 3.0,
    //   "cheerful_score": 8.0,
    //   "awake_score": 8.0,
    //   "fearless_score": 3.0
    // },
    // {
    //   "movie_id": 3662,
    //   "title": "Fight Club",
    //   "image_url": "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    //   "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //   "calm_score": 2.0,
    //   "cheerful_score": 4.0,
    //   "awake_score": 6.5,
    //   "fearless_score": 4.0
    // },
    // {
    //   "movie_id": 3917,
    //   "title": "Goodfellas",
    //   "image_url": "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    //   "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //   "calm_score": 2.0,
    //   "cheerful_score": 5.0,
    //   "awake_score": 7.0,
    //   "fearless_score": 4.0
    // }
  ]

  const movieList = list_of_movies.map((item, index) => (
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
        src={item.image_url}
      />
    </ListItem>
  ));

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
        <Button variant='contained'>Hello</Button>
        <Button variant='contained'>Hello</Button>
        <Button variant='contained'>Hello</Button>
        <Button variant='contained'>Hello</Button>
      </Stack>
      <Stack direction={'column'} spacing={4}>
        <Stack direction={'row'} spacing={4}>
          <Typography>Calm</Typography>
          <Slider></Slider>
        </Stack>
        <Stack direction={'row'}>
          <Typography>Cheerful</Typography>
          <Slider></Slider>
        </Stack>
        <Stack direction={'row'}>
          <Typography>Awake</Typography>
          <Slider></Slider>
        </Stack>
        <Stack direction={'row'}>
          <Typography>Fearless</Typography>
          <Slider></Slider>
        </Stack>
      </Stack>
      <Stack direction={'row'} spacing={4}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
          <Stack direction={'row'} spacing={4}>
            {movieList}
          </Stack>
        </List>
      </Stack>
    </Stack>

  )
}

export default App;
