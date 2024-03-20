/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@mui/material';

import { DotsVertical, MovieOff } from '@nxweb/icons/tabler';

import type { Product } from '@models/products/types';
import { useCommand, useStore } from '@models/store';

interface CardMovieItemProps {
  readonly product: Product
}

const CardMovieItem = ({ product }: CardMovieItemProps) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [state, dispatch] = useStore((store) => store);
  const command = useCommand((cmd) => cmd);
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

  const toDetail = (id: number) => {
    navigate(`/movies/${id}`);
  };

  const handleDelete = () => {
    if (product?.id) {
      dispatch(command.history.delete(product?.id));
      navigate('/movies');
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <img
            alt=""
            src={product.poster_path}
            style={{ height: '100%', width: '100%' }} />
        </CardContent>
        <CardContent>
          <Typography sx={{ mb: 2 }} variant="h5">
            {product.title}
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
            <IconButton size="small" onClick={handleDelete}>
              <MovieOff />
            </IconButton>
            <Button variant="text" onClick={() => toDetail(product.id)}>
              Details
            </Button>

            <IconButton onClick={(e) => handleClick(e, product.id)}>
              <DotsVertical />
            </IconButton>
          </Box>
        </CardActions>
      </Card>

      <Menu
        anchorEl={anchorEl}
        id="basic-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDetail}>Detail</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};

CardMovieItem.displayName = 'CardMovieItem';

export default CardMovieItem;
