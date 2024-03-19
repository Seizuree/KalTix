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
        bgcolor: 'primary.main',
        width: '100%',
        height: '100%',
        p: '1%',
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        marginTop: '60px',
        borderRadius: '10px'
      }}
    >
        <Typography
          sx={{
            color: 'white'
          }}
          variant="h1"
        >TOP 3 MOVIES RIGHT NOW!
        </Typography>
        <ImageList
          cols={3}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%'

          }}
        >
           {state?.topRated
             ? state.topRated.map((top, index) => (
            <ImageListItem
              key={index}
              sx={{
                height: '70%',
                width: '70%',
                marginLeft: '15%'
              }}
            >
              <img
                alt={top.title}
                src={`https://image.tmdb.org/t/p/original/${top.backdrop_path}`}
                style={{ borderRadius: '5px' }} />
              <ImageListItemBar
                title={top.title} />
            </ImageListItem>
             ))
             : <div>No data available</div>}
        </ImageList>
    </Box>
  );
};

export default TopThree;
