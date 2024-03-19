/* eslint-disable react/display-name */
import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';

import { useCommand, useStore } from '@models/store.js';

const TopThree = () => {
  const [state, dispatch] = useStore((store) => store.topRated);
  const command = useCommand((cmd) => cmd);

  useEffect(() => {
    dispatch(command.products.topRatedLoad()).catch((err: unknown) => {
      console.error(err);
    });
  }, []);

  return (
    <Box
      sx={{
        alignItems: 'center',
        bgcolor: 'primary.main',
        borderRadius: '10px',
        height: '100%',
        justifyContent: 'center',
        left: 0,
        marginBottom: '20px',
        marginTop: '60px',
        p: '1%',
        right: 0,
        width: '100%'
      }}
    >
      <Typography
        sx={{
          color: 'white'
        }}
        variant="h1"
      >
        TOP 3 MOVIES RIGHT NOW!
      </Typography>
      <ImageList
        cols={3}
        sx={{
          alignItems: 'center',
          height: '100%',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        {state?.topRated?.map((top) => (
          <ImageListItem
            sx={{
              height: '70%',
              width: '70%',
              marginLeft: '15%'
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${top.backdrop_path}`}
              style={{ borderRadius: '5px 5px 5px 5px' }} />
            <ImageListItemBar title={top.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default TopThree;
