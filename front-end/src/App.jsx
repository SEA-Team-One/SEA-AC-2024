import {Box, Button, Slider, Stack, Typography} from '@mui/material'

function App() {

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
