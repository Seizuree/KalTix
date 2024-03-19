import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, styled, Typography } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useKeenSlider } from 'keen-slider/react';

import {
  Bookmark,
  BookmarkFilled,
  Heart,
  HeartFilled,
  Star,
  StarFilled
} from '@nxweb/icons/tabler';

import type { Product } from '@models/products/types';

import type { Direction } from '@mui/material';

interface RecommendationsProps {
  direction: Direction
  recommendations: Product[] | undefined
}

const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    height: 200
  },
  [theme.breakpoints.down('md')]: {
    height: 100
  }
}));

const Recommendations = (Recommendations: RecommendationsProps) => {
  const { recommendations, direction } = Recommendations;
  const navigate = useNavigate();
  const [heartFilled, setHeartFilled] = useState(false);
  const [starFilled, setStarFilled] = useState(false);
  const [bookmarkFilled, setBookmarkFilled] = useState(false);

  const handleDetail = (id: string) => {
    navigate(`/movies/${id}`);
  };

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: direction === 'rtl',
    slides: {
      perView: 5,
      spacing: 16
    }
  });

  return (
    <Box
      className="keen-slider"
      ref={ref}
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      {recommendations?.map((product) => (
        <div className="keen-slider__slide" key={product?.id}>
          <Box
            sx={{
              '&:hover .hover': {
                opacity: 1
              },
              position: 'relative'
            }}
            onClick={() => handleDetail(product?.id.toString())}
          >
          <Img
            alt={product?.title}
            height="150"
            src={product?.backdrop_path}
            sx={{ borderRadius: '10px' }} />
          <Box
            className="hover"
            sx={{
              bgcolor: 'rgba(255, 255, 255, .6)',
              bottom: '0.3rem',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              opacity: 0,
              padding: '0.5rem',
              position: 'absolute',
              transition: 'opacity 0.3s ease',
              width: '100%'
            }}
          >
            <Typography>{product?.release_date}</Typography>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              {heartFilled
                ? <HeartFilled onClick={() => setHeartFilled(false)} />
                : <Heart onClick={() => setHeartFilled(true)} />}
              {starFilled
                ? <StarFilled onClick={() => setStarFilled(false)} />
                : <Star onClick={() => setStarFilled(true)} />}
              {bookmarkFilled
                ? <BookmarkFilled onClick={() => setBookmarkFilled(false)} />
                : <Bookmark onClick={() => setBookmarkFilled(true)} />}
            </Box>
          </Box>
          </Box>
          <Typography>{product?.title}</Typography>
        </div>
      ))}
    </Box>
  );
};

Recommendations.displayName = 'Recommendations';

export default Recommendations;
