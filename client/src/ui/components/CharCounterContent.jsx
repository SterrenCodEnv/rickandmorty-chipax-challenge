import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const CharCounterContent = ({ payload }) => {
  return (
    <Grid container spacing={5} alignItems="flex-end">
      {payload.map((counter) => (
        <Grid key={counter.char} item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={counter.char.toUpperCase()}
              titleTypographyProps={{ align: 'center', variant: 'h4' }}
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
                <Typography component="h2" variant="h4" color="text.primary">
                  {counter.count}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'baseline',
                }}
              >
                <Typography
                  component="h3"
                  variant="h5"
                  color="text.secondary"
                  textTransform={'capitalize'}
                >
                  {counter.resource}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
