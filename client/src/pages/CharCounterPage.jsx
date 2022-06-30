import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { CharCounterContent } from '../ui';

const counter = {
  exercise_name: 'Char counter',
  time: '1s.129726434',
  in_time: true,
  results: [
    {
      char: 'c',
      resource: 'character',
      count: 494,
    },
    {
      char: 'e',
      resource: 'episode',
      count: 88,
    },
    {
      char: 'l',
      resource: 'location',
      count: 82,
    },
  ],
};

export const CharCounterPage = () => {
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 6, pb: 6 }}
      >
        <Typography
          textTransform={'capitalize'}
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {counter.exercise_name}
        </Typography>

        <Container
          maxWidth="md"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pb: 1,
            pt: 3,
          }}
        >
          {counter.in_time ? (
            <CheckCircleOutlineIcon sx={{ fontSize: 50 }} color="primary" />
          ) : (
            <HighlightOffIcon sx={{ fontSize: 50 }} color="error" />
          )}
        </Container>

        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Tiempo de ejecución: {counter.time}
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <CharCounterContent payload={counter.results} />
      </Container>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          mt: 1,
          py: [2, 2],
        }}
      ></Container>
    </>
  );
};
