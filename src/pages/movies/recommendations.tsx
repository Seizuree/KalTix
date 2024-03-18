import { useState } from 'react';

import { Box, styled, Typography } from '@mui/material';

import {
  Bookmark,
  BookmarkFilled,
  Heart,
  HeartFilled,
  Star,
  StarFilled
} from '@nxweb/icons/tabler';

import type { Product } from '@models/products/types';

interface RecommendationsProps {
  recommendations: Product | undefined
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
  const { recommendations } = Recommendations;
  const [heartFilled, setHeartFilled] = useState(false);
  const [starFilled, setStarFilled] = useState(false);
  const [bookmarkFilled, setBookmarkFilled] = useState(false);

  return (
    <Box>
      <Box
        sx={{
          '&:hover .hover': {
            opacity: 1
          },
          position: 'relative'
        }}
      >
        <Img
          alt={recommendations?.title}
          height="150"
          src={recommendations?.backdrop_path} />
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
          <Typography>{recommendations?.release_date}</Typography>
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
      <Typography>{recommendations?.title}</Typography>
    </Box>
  );
};

Recommendations.displayName = 'Recommendations';

export default Recommendations;
