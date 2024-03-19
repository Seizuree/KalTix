import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { PageComponent } from '@nxweb/react';

import { useSettings } from '@hooks/use-settings';

import AddMovie from './addMovie';
import NowPlaying from './nowPlaying';
import TopSec from './top';
import TopThree from './topThree';
import Upcoming from './upcoming';

const Home: PageComponent = () => {
  const {
    settings: { direction }
  } = useSettings();

  return (
    <Box>
      <Grid container={true}>
        <Grid item={true} xs={12}>
          <TopSec />
        </Grid>
      </Grid>

      <NowPlaying />

      <TopThree />

      <Grid item={true} sx={{ mt: '40px', pb: 4 }} xs={12}>
        <Typography
          sx={{
            color: 'primary.main'
          }}
          variant="h1"
        >
          UPCOMING
        </Typography>
      </Grid>

      <Upcoming direction={direction} />

      <AddMovie />
    </Box>
  );
};

Home.displayName = 'Home';

export default Home;
