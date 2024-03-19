/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { DotsVertical, MovieOff } from '@nxweb/icons/tabler';

import { Menu, MenuItem } from '@components/material.js';
import { useCommand, useStore } from '@models/store.js';

const CardMovie = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useStore((store) => store.products);
  const command = useCommand((cmd) => cmd);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [id, setId] = useState<number | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setId(id);
  };

  const handleClose = () => {
    setId(null);
    setAnchorEl(null);
  };

  const handleDetail = () => {
    navigate(`/movies/${id}`);
  };

  useEffect(() => {
    dispatch(command.products.load()).catch((err: unknown) => {
      console.error(err);
    });
  }, []);

  return (
    <>
      <Grid container={true} spacing={6}>
        {state?.products?.map((row) => (
          <Grid item={true} md={3} sx={{ pb: 4 }} xs={12}>
            <Card>
              <CardMedia />

              <CardContent>
                <img
                  alt=""
                  src={`https://image.tmdb.org/t/p/original/${row.poster_path}`}
                  style={{ height: '100%', width: '100%' }} />
              </CardContent>
              <CardContent>
                <Typography sx={{ mb: 2 }} variant="h5">
                  {row.title}
                </Typography>
              </CardContent>
              <CardActions className="card-action-dense">
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}
                >
                  <IconButton size="small">
                    <MovieOff />
                  </IconButton>
                  <Link
                    color="primary"
                    href={`/movies/${row.id}`}
                    underline="none"
                  >
                    Details
                  </Link>

                  <IconButton onClick={(e) => handleClick(e, row.id)}>
                    <DotsVertical />
                  </IconButton>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Menu
        anchorEl={anchorEl}
        id="basic-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDetail}>Detail</MenuItem>
        <MenuItem>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default CardMovie;
