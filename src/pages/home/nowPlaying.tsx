import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

import { useCommand, useStore } from '@models/store.js';

const NowPlaying = () => {
  const [state, dispatch] = useStore((store) => store.now_playing);
  const command = useCommand((cmd) => cmd);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(command.products.now_playingLoad()).catch((err: unknown) => {
      console.error(err);
    });
  }, []);

  const handleDetail = () => {
    navigate(`/movies`);
  };

  return (
    <Box
      sx={{

        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        marginTop: '40px',
        borderRadius: '10px'
      }}
    >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'

          }}
        >
        <Typography
          sx={{

            color: 'primary.main'
          }}
          variant="h1"
        >NOW PLAYING
        </Typography>

        {/* untuk ke productlist  */}

          <Button variant="text" onClick={handleDetail}>
          See All
          </Button>

        </Box>

        <ImageList
          cols={4}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%'

          }}
        >

        {state?.nowplaying
          ? state.nowplaying.map((np, index) => (
              <ImageListItem
                key={index}
                sx={{
                  height: '80%',
                  width: '80%',
                  marginLeft: '10%'

                }}
              >
                <img src={`https://image.tmdb.org/t/p/original/${np.poster_path}`} style={{ borderRadius: '5px 5px 5px 5px' }} />
              </ImageListItem>
          ))
          : <div>No data available</div>}

        </ImageList>
    </Box>
  );
};

export default NowPlaying;
