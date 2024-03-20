/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import { useEffect } from 'react';

import { Grid } from '@mui/material';

import CardMovieItem from '@components/movies/cardMovieItem';
import type { Product } from '@models/products/types';
import { useCommand, useStore } from '@models/store.js';

const CardMovie = () => {
  const [state, dispatch] = useStore((store) => store);
  const command = useCommand((cmd) => cmd);

  useEffect(() => {
    dispatch(command.products.load()).catch((err: unknown) => {
      console.error(err);
    });

    dispatch(command.history.load());
  }, []);

  const product: Product[] = [...state.products?.products ?? [], ...state.history?.history ?? []];

  return (
    <Grid container={true} spacing={6}>
        {product.map((row) => (
          <Grid item={true} md={3} sx={{ pb: 4 }} xs={12}>
            <CardMovieItem product={row} />
          </Grid>
        ))}
    </Grid>
  );
};

export default CardMovie;
