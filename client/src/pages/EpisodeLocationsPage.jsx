import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { EpisodeLocationsContent } from '../ui';
import { Alert } from '@mui/material';
import { AlertTitle } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { useAxios } from '../hooks';

export const EpisodeLocationsPage = () => {
  const payload = useAxios(`${window.location.pathname}`);
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />

      {payload.isLoading ? (
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
      ) : payload.hasError !== null ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {payload.hasError}
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
              {payload.data.exercise_name}
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
              {payload.data.in_time ? (
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
              Tiempo de ejecución: {payload.data.time}
            </Typography>
          </Container>
          <Container maxWidth="md" component="main">
            <EpisodeLocationsContent payload={payload.data.results} />
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
