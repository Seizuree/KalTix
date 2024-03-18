/* eslint-disable react/button-has-type */
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import type { PageComponent } from '@nxweb/react';

import { Box, Chip, styled, Typography } from '@components/material.js';
import { useCommand, useStore } from '@models/store.js';

const Product: PageComponent = () => {
  const { id } = useParams();
  const [state, dispatch] = useStore((store) => store.products);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const command = useCommand((cmd) => cmd);

  const product = useMemo(
    () => state?.products?.find((o) => o.id.toString() === id),
    [state, id]
  );

  useEffect(() => {
    dispatch(command.products.load()).catch((err: unknown) => {
      console.error(err);
    });

    /*
     * Return () => {
     *   dispatch(command.products.clear());
     * };
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Img = styled('img')(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
      height: 450
    },
    [theme.breakpoints.down('md')]: {
      height: 400
    }
  }));

  const genreNames = useMemo(() => {
    if (!product || !state || !state.genres) return [];

    return product.genre_ids.map((genreId: number) => {
      if (state.genres) {
        const genre = state.genres.find((g) => g.id === genreId);

        return genre ? genre.name : 'Unknown';
      }

      return [];
    });
  }, [product, state]);

  return (
    <>
      <Box
        sx={{
          alignItems: 'start',
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem'
        }}
      >
        <Img
          alt={product?.title}
          height="500"
          src={product?.poster_path.startsWith('/') ? `https://image.tmdb.org/t/p/original/${product?.poster_path}` : product?.poster_path} />
        <Box
          sx={{
            alignItems: 'start',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <h1 css={{ alignItems: 'center', display: 'flex', gap: '1rem' }}>
            {product?.title}
          </h1>
          <Typography>Genre</Typography>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            {genreNames.map((genreName, index) => <Chip key={product?.genre_ids[index]} label={genreName} />)}
          </Box>
        </Box>
      </Box>
      <div>{product?.title}</div>
      {genreNames}
      <pre>{product ? JSON.stringify(product, null, 2) : null}</pre>
    </>
  );
};

Product.displayName = 'Product';

export default Product;