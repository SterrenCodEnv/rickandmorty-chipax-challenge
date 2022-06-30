import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { EpisodeLocationsContent } from '../ui';

const episodeLocations = {
  exercise_name: 'Episode locations',
  time: '2s.935581137',
  in_time: true,
  results: [
    {
      locations: [
        'Citadel of Ricks',
        'Earth (C-137)',
        "Zigerion's Base",
        'Earth (Replacement Dimension)',
      ],
      name: 'M. Night Shaym-Aliens!',
      episode: 'S01E04',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (C-137)',
        'Fantasy World',
        "Giant's Town",
        'Earth (Fascist Dimension)',
        'Earth (Replacement Dimension)',
      ],
      name: 'Meeseeks and Destroy',
      episode: 'S01E05',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'Earth (C-137)',
        'unknown',
      ],
      name: 'Rick Potion #9',
      episode: 'S01E06',
    },
    {
      locations: ['Citadel of Ricks', 'Earth (Replacement Dimension)'],
      name: 'Raising Gazorpazorp',
      episode: 'S01E07',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'Interdimensional Cable',
        'Earth (C-500A)',
        'Hamster in Butt World',
        'Earth (Phone Dimension)',
      ],
      name: 'Rixty Minutes',
      episode: 'S01E08',
    },
    {
      locations: ['Citadel of Ricks', 'Earth (Replacement Dimension)', 'Pluto'],
      name: 'Something Ricked This Way Comes',
      episode: 'S01E09',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'Testicle Monster Dimension',
        'unknown',
        "Earth (Evil Rick's Target Dimension)",
        'Hideout Planet',
        'Earth (C-137)',
        "Rick's Memories",
        'Earth (Fascist Dimension)',
        'Earth (Pizza Dimension)',
        'Greasy Grandma World',
        'Earth (Phone Dimension)',
        'Earth (Chair Dimension)',
        'Gaia',
      ],
      name: 'Close Rick-counters of the Rick Kind',
      episode: 'S01E10',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'Testicle Monster Dimension',
        'Bepis 9',
        'Planet Squanch',
        'Earth (C-137)',
        'Gear World',
        'Fantasy World',
        'NX-5 Planet Remover',
        "Worldender's lair",
        "Rick's Memories",
      ],
      name: 'Ricksy Business',
      episode: 'S01E11',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'Snake Planet',
      ],
      name: 'A Rickle in Time',
      episode: 'S02E01',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'Immortality Field Resort',
        'Interdimensional Cable',
        'Roy: A Life Well Lived',
        'unknown',
        'Nuptia 4',
        'Jerryboree',
        'Earth (Fascist Dimension)',
        'Gear World',
        'Signus 5 Expanse',
        'Planet Squanch',
        "Worldender's lair",
        'Testicle Monster Dimension',
      ],
      name: 'Mortynight Run',
      episode: 'S02E02',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'unknown',
        "Unity's Planet",
      ],
      name: 'Auto Erotic Assimilation',
      episode: 'S02E03',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'Earth (C-137)',
        'unknown',
      ],
      name: 'Total Rickall',
      episode: 'S02E04',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'Signus 5 Expanse',
        'Planet Squanch',
        'Alphabetrium',
        'unknown',
        'NX-5 Planet Remover',
        "Worldender's lair",
        'St. Gloopy Noops Hospital',
      ],
      name: 'Get Schwifty',
      episode: 'S02E05',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'Interdimensional Cable',
        "Rick's Battery Microverse",
        'Earth (Giant Telepathic Spiders Dimension)',
        "Kyle's Teenyverse",
        "Zeep Xanflorp's Miniverse",
      ],
      name: 'The Ricks Must Be Crazy',
      episode: 'S02E06',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'Nuptia 4',
        'Interdimensional Cable',
      ],
      name: 'Big Trouble in Little Sanchez',
      episode: 'S02E07',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'Immortality Field Resort',
        'Bepis 9',
        'Interdimensional Cable',
        'St. Gloopy Noops Hospital',
        'unknown',
        'Hamster in Butt World',
        'Planet Squanch',
        "Worldender's lair",
        'Plopstar',
      ],
      name: 'Interdimensional Cable 2: Tempting Fate',
      episode: 'S02E08',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'Purge Planet',
      ],
      name: "Look Who's Purging Now",
      episode: 'S02E09',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'Immortality Field Resort',
        'Planet Squanch',
        'Nuptia 4',
        'unknown',
        'Signus 5 Expanse',
        'NX-5 Planet Remover',
        'Interdimensional Cable',
        "Worldender's lair",
        'St. Gloopy Noops Hospital',
      ],
      name: 'The Wedding Squanchers',
      episode: 'S02E10',
    },
    {
      locations: [
        'Citadel of Ricks',
        'Earth (Replacement Dimension)',
        'Earth (C-137)',
        'Planet Squanch',
        'unknown',
        "Rick's Memories",
        'Galactic Federation Prison',
        'NX-5 Planet Remover',
      ],
      name: 'The Rickshank Rickdemption',
      episode: 'S03E01',
    },
  ],
};

export const EpisodeLocationsPage = () => {
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
          {episodeLocations.exercise_name}
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
          {episodeLocations.in_time ? (
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
          Tiempo de ejecución: {episodeLocations.time}
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <EpisodeLocationsContent payload={episodeLocations.results} />
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
