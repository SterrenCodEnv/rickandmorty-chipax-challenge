import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Masonry from '@mui/lab/Masonry';

export const EpisodeLocationsContent = ({ payload }) => {
  return (
    <Masonry
      columns={{
        sm: 1,
        md: 3,
        xl: 4,
      }}
      spacing={3}
    >
      {payload.map((location, index) => (
        <Card key={index}>
          <CardHeader
            title={location.name}
            titleTypographyProps={{ align: 'center', variant: 'h5' }}
            subheaderTypographyProps={{
              align: 'center',
            }}
            sx={{
              backgroundColor: 'teal',
              color: 'white',
            }}
          />
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                mb: 2,
              }}
            >
              <Typography component="h2" variant="h5" color="text.primary">
                {location.episode}
              </Typography>
            </Box>
            <ul>
              {location.locations.map((item) => (
                <li key={item}>
                  <Typography
                    component="h4"
                    variant="h7"
                    color="text.secondary"
                    align="center"
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </Masonry>
  );
};
