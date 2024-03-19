/* eslint-disable react/no-array-index-key */
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Bookmark,
  BookmarkFilled,
  Heart,
  HeartFilled,
  Pencil,
  Star,
  StarFilled,
  Trash
} from '@nxweb/icons/tabler';
import type { PageComponent } from '@nxweb/react';

import { Box, Button, Chip, styled, Typography } from '@components/material.js';
import { useSettings } from '@hooks/use-settings';
import { useCommand, useStore } from '@models/store.js';

import Recommendations from '../../components/movies/recommendations';

const Product: PageComponent = () => {
  const { id } = useParams();
  const [state, dispatch] = useStore((store) => store.products);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stateDetail, dispatchDetail] = useStore((store) => store.detail);

  const command = useCommand((cmd) => cmd);
  const product = useMemo(() => stateDetail?.detail, [stateDetail]);

  const [heartFilled, setHeartFilled] = useState(false);
  const [starFilled, setStarFilled] = useState(false);
  const [bookmarkFilled, setBookmarkFilled] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    dispatch(command.products.load()).catch((err: unknown) => {
      console.error(err);
    });

    if (id) {
      dispatchDetail(command.products.detail(id))
        .catch((err: unknown) => {
          console.error(err);
        })
        .finally(() => {
          setLoad(true);
        });
    }
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

    return product.genres.map((genreId) => {
      if (state.genres) {
        const genre = state.genres.find((g) => g.id === genreId.id);

        return genre ? genre.name : 'Unknown';
      }

      return [];
    });
  }, [product, state]);

  const duration = Math.floor((product?.runtime ?? 0) / 60);
  const minutes = (product?.runtime ?? 0) % 60;

  const {
    settings: { direction }
  } = useSettings();

  return (
    <>
      {load
        ? (
        <>
          <Box
            sx={{
              alignItems: 'start',
              display: 'flex',
              flexDirection: 'row',
              gap: '3rem',
              margin: '3rem 1rem'
            }}
          >
            <Img
              alt={product?.title}
              height="400"
              src={
                product?.poster_path.startsWith('/')
                  ? `https://image.tmdb.org/t/p/original/${product?.poster_path}`
                  : product?.poster_path
              }
              sx={{ borderRadius: '10px' }} />
            <Box
              sx={{
                alignItems: 'start',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}
            >
              <Typography sx={{ fontWeight: 'bold' }} variant="h1">
                {product?.title} ({product?.release_date.slice(0, 4)})
              </Typography>
              <Typography variant="h6">
                {product?.release_date} ({product?.original_language}) &#xb7; {duration} h {minutes} m
              </Typography>
              <Box sx={{ display: 'flex', gap: '1rem' }}>
                {genreNames.map((genreName, index) => (
                  <div key={index}>
                    <Chip label={genreName} />
                  </div>
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Box
                  sx={{
                    bgcolor: '#00AF7B',
                    borderRadius: '2rem',
                    cursor: 'pointer',
                    padding: '15px 15px 8px 15px'
                  }}
                >
                  {heartFilled
                    ? <HeartFilled onClick={() => setHeartFilled(false)} />
                    : <Heart onClick={() => setHeartFilled(true)} />}
                </Box>
                <Box
                  sx={{
                    bgcolor: '#00AF7B',
                    borderRadius: '2rem',
                    cursor: 'pointer',
                    padding: '15px 15px 8px 15px'
                  }}
                >
                  {starFilled
                    ? <StarFilled onClick={() => setStarFilled(false)} />
                    : <Star onClick={() => setStarFilled(true)} />}
                </Box>
                <Box
                  sx={{
                    bgcolor: '#00AF7B',
                    borderRadius: '2rem',
                    cursor: 'pointer',
                    padding: '15px 15px 8px 15px'
                  }}
                >
                  {bookmarkFilled
                    ? <BookmarkFilled onClick={() => setBookmarkFilled(false)} />
                    : <Bookmark onClick={() => setBookmarkFilled(true)} />}
                </Box>
              </Box>

              <Typography variant="h5">{product?.overview}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '20%'
              }}
            >
              <Button startIcon={<Pencil />} variant="contained">
                Edit
              </Button>
              <Button
                color="secondary"
                startIcon={<Trash />}
                variant="contained"
              >
                Delete
              </Button>
            </Box>
          </Box>
          <Typography
            sx={{ fontWeight: 'bold', marginBottom: '1rem' }}
            variant="h4"
          >
            Recommendations
          </Typography>
          <Recommendations
            direction={direction}
            recommendations={stateDetail?.recommendations} />
        </>
        )
        : <Typography>Loading...</Typography>}
    </>
  );
};

Product.displayName = 'Product';

export default Product;
