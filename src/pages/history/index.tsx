import { useEffect, useMemo } from 'react';

import { Grid, Typography } from '@mui/material';

import type { PageComponent } from '@nxweb/react';

import CardMovieItem from '@components/movies/cardMovieItem';
import { useCommand, useStore } from '@models/store';

const History: PageComponent = () => {
  const [state, dispatch] = useStore((store) => store);
  const command = useCommand((cmd) => cmd);

  useEffect(() => {
    dispatch(command.history.load);
  }, [command.history.load, dispatch, state]);

  const history = useMemo(() => {
    return state.history;
  }, [state.history]);

  return (
    <>
      <Typography variant="h3">Your movie added</Typography>
      {state.history?.history
        ? (
        <Grid container={true} spacing={6}>
          {history?.history?.map((row) => (
            <Grid item={true} key={row.id} md={3} sx={{ pb: 4 }} xs={12}>
              <CardMovieItem product={row} />
            </Grid>
          ))}
        </Grid>
        )
        : <Typography> no data </Typography>}
    </>
  );
};

History.displayName = 'History';

export default History;
