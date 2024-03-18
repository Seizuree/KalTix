/* eslint-disable react/button-has-type */
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useKeenSlider } from 'keen-slider/react';

import type { PageComponent } from '@nxweb/react';

import { Box, Chip, styled, Typography } from '@components/material.js';
import { useSettings } from '@hooks/use-settings';
import { useCommand, useStore } from '@models/store.js';

import Recommendations from './recommendations';

const Product: PageComponent = () => {
  const { id } = useParams();
  const [state, dispatch] = useStore((store) => store.products);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stateDetail, dispatchDetail] = useStore((store) => store.detail);

  const command = useCommand((cmd) => cmd);
  const product = useMemo(
    () => state?.products?.find((o) => o.id.toString() === id),
    [state, id]
  );

  useEffect(() => {
    dispatch(command.products.load()).catch((err: unknown) => {
      console.error(err);
    });

    if (id) {
      dispatchDetail(command.products.detail(id)).catch((err: unknown) => {
        console.error(err);
      });
    }
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
  const {
    settings: { direction }
  } = useSettings();

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: direction === 'rtl'
  });

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
        <Img alt={product?.title} height="400" src={product?.poster_path} />
        <Box
          sx={{
            alignItems: 'start',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <h1 css={{ alignItems: 'center', display: 'flex', gap: '1rem' }}>
            {' '}
            {product?.title} ({product?.release_date}){' '}
          </h1>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            {genreNames.map((genreName, index) => <Chip key={product?.genre_ids[index]} label={genreName} />)}
          </Box>
          <Typography>{product?.overview}</Typography>
        </Box>
      </Box>
      <Box
        className="keen-slider"
        ref={ref}
        sx={{
          alignItems: 'start',
          display: 'flex',
          flexDirection: 'row',
          flexWrapL: 'wrap',
          gap: '1rem'
        }}
      >
      {stateDetail?.recommendations?.map((product) => <Box className="keen-slider__slide" key={product.id} ><Recommendations  recommendations={product} /> </Box>)}
      </Box>
    </>
  );
};

Product.displayName = 'Product';

export default Product;
