import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { CharCounterContent } from '../ui';
import { Alert } from '@mui/material';
import { AlertTitle } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { useAxios } from '../hooks';

export const CharCounterPage = () => {
  const counter = useAxios('/char-counter');
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      {counter.isLoading ? (
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
          <CircularProgress />
        </Container>
      ) : counter.hasError !== null ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {counter.hasError}
        </Alert>
      ) : (
        <>
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
              {counter.data.exercise_name}
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
              {counter.data.in_time ? (
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
              Tiempo de ejecución: {counter.data.time}
            </Typography>
          </Container>
          <Container maxWidth="md" component="main">
            <CharCounterContent payload={counter.data.results} />
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
      )}
    </>
  );
};
